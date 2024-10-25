FROM node:lts-alpine

ENV NODE_ENV=production

EXPOSE 3000

WORKDIR /app

COPY . /app

RUN npm install

CMD [ "npm", "run", "start" ]