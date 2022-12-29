FROM node:14-alpine

WORKDIR /app

COPY . .

RUN npm install mysql
RUN npm install redis

EXPOSE 8080

ENTRYPOINT ["node", "main.js"]
