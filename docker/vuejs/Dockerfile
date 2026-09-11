FROM node:24.12.0-alpine

WORKDIR /app

COPY docker/vuejs/*.sh /usr/local/bin/

COPY vuejs-app/vue-project/package*.json ./

RUN npm install

COPY vuejs-app/vue-project/ ./

RUN chmod +x /usr/local/bin/*.sh

EXPOSE 5173