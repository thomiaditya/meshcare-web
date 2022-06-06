FROM node:16

WORKDIR /app

RUN npm install -g npm-run-all serve yarn

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

CMD [ "npm-run-all", "--parallel", "server:**" ]