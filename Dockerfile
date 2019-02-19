FROM node:11-alpine

WORKDIR /usr/src/app

COPY . .

COPY package*.json ./

RUN npm install

RUN npm install -g nodemon

EXPOSE 8000

CMD npm run dev