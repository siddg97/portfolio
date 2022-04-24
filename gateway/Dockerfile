FROM openresty/openresty:1.19.3.1-3-alpine-fat
RUN apk add --no-cache git

# Openresty has nginx with default config. The goal is to substitute with out config file.
ENV NGINX_PATH /usr/local/openresty/nginx/conf
WORKDIR $NGINX_PATH

# Copy all the nginx files as well as templates
RUN rm $NGINX_PATH/nginx.conf
COPY ./nginx $NGINX_PATH

COPY ./setup.sh .

EXPOSE 3000
ENTRYPOINT ["./setup.sh"]
