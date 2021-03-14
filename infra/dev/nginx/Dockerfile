## Base image to pull
FROM nginx

## delete default nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

## Copy configuration to container
COPY nginx.conf /etc/nginx/conf.d/