FROM node:16

WORKDIR /app

RUN npm install -g npm-run-all serve

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm-run-all", "--parallel", "server:**" ]