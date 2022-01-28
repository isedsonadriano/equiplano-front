FROM node:14.15 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run ng build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=node /app/dist/equiplano-front .
ENTRYPOINT [ "nginx","-g", "daemon off;" ]



