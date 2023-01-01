FROM node:14-alpine

WORKDIR /app

RUN apk add redis

COPY . .

RUN npm install mysql
RUN npm install redis

EXPOSE 8080

ENTRYPOINT ["sh", "start.sh"]
