RELEASE_NAME?=portfolio
INFRA_DIR=./infrastructure

setup-env:
	# Setup local registry
	$(INFRA_DIR)/registry.sh

	# Create kind cluster with the required configs
	kind create cluster --config $(INFRA_DIR)/kind.config.yaml

	# Connect registry to kind network in docker
	-docker network connect "kind" kind-registry

	# Setup skaffold global config
	skaffold config set kind-disable-load true

	# Install ingress controller to kind cluster and wait till its ready
	kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
	sleep 15
	kubectl wait --namespace ingress-nginx \
  --for=condition=ready pod \
  --selector=app.kubernetes.io/component=controller \
  --timeout=90s

	# Load helm repos
	helm repo add jaegertracing https://jaegertracing.github.io/helm-charts

	# Build helm dependencies
	helm dep update $(INFRA_DIR)/helm

nuke:
	helm uninstall $(RELEASE_NAME)

k8s-jaeger:
	kubectl port-forward `kubectl get pods -l=app="jaeger" -o name` 16687:16686

helm-debug:
	helm install \
		--dry-run \
		--disable-openapi-validation \
		$(RELEASE_NAME) \
		./helm

cert-manager:
	helm install \
		cert-manager jetstack/cert-manager \
		--namespace cert-manager \
		--create-namespace \
		--version v1.6.1 \
		--set installCRDs=true