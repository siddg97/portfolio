PROJECT_ID=portfolio-sidd
ZONE=us-west1-a
TF_ACTION?=plan

check-env:
ifndef ENV
	$(error Please set ENV=[staging|prod])
endif

define get-secret
$(shell gcloud secrets versions access latest --secret=$(1) --project=$(PROJECT_ID))
endef

run-local:
	cd infra/dev && \
		docker-compose up --build

tf-create-bucket:
	gsutil mb -p ${PROJECT_ID} gs://${PROJECT_ID}-terraform

tf-create-workspace: check-env
	cd terraform && \
		terraform workspace new ${ENV}

tf-init: check-env
	cd terraform && \
		terraform workspace select ${ENV} && \
		terraform init

tf-action: check-env
	cd terraform && \
		terraform workspace select ${ENV} && \
		terraform ${TF_ACTION} \
		-var-file="./environments/common.tfvars" \
		-var-file="./environments/${ENV}/config.tfvars" \
		-var="cloudflare_token=$(call get-secret,cloudflare_api_token)"

SSH_STR=sgupta@portfolio-vm-$(ENV)

ssh: check-env
	gcloud compute ssh $(SSH_STR) \
		--project=$(PROJECT_ID) \
		--zone=$(ZONE)

ssh-cmd: check-env
	@gcloud compute ssh $(SSH_STR) \
		--project=$(PROJECT_ID) \
		--zone=$(ZONE) \
		--command="$(CMD)"

GITHUB_SHA?=latest
LOCAL_TAG=portfolio:$(GITHUB_SHA)
REMOTE_TAG=gcr.io/$(PROJECT_ID)/$(LOCAL_TAG)
CONTAINER_NAME=portfolio-$(ENV)
#-----------[ENV VARS]------------
MHOST=smtp.gmail.com
CUSER=portfolio.sidd@gmail.com
SEND_TO_EMAIL=g.sidd97@gmail.com
GH_API=https://api.github.com


build:
	docker build -t $(LOCAL_TAG) .

push:
	docker tag $(LOCAL_TAG) $(REMOTE_TAG)
	docker push $(REMOTE_TAG)

deploy: check-env
	$(MAKE) ssh-cmd CMD='docker-credential-gcr configure-docker'
	@echo "Pulling latest docker image..."
	$(MAKE) ssh-cmd CMD='docker pull $(REMOTE_TAG)'
	@echo "Stopping old version..."
	-$(MAKE) ssh-cmd CMD='docker container stop $(CONTAINER_NAME)'
	-$(MAKE) ssh-cmd CMD='docker container rm $(CONTAINER_NAME)'
	@echo "Deploying latest version..."
	@$(MAKE) ssh-cmd CMD='\
		docker run -d --restart=unless-stopped \
		--name=$(CONTAINER_NAME) \
		-p 80:3000 \
		-e CPASS=$(call get-secret,email_password) \
		-e GH_PAT=$(call get-secret,github_token) \
		-e MHOST=$(MHOST) \
		-e CUSER=$(CUSER) \
		-e SEND_TO_EMAIL=$(SEND_TO_EMAIL) \
		-e GH_API=$(GH_API) \
		$(REMOTE_TAG) \
		'