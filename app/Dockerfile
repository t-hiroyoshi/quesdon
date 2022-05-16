FROM node:10

ENV BACK_PORT 8080

WORKDIR /code

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN NODE_ENV=production yarn build

EXPOSE 8080

CMD ["node", "/code/dist/server/index.js"]