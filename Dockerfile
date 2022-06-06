FROM node:16

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g npm-run-all serve

CMD [ "npm-run-all", "" ]