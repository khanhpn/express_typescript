FROM node:gallium-alpine

COPY . ./app

WORKDIR /app

RUN yarn install

EXPOSE 3000

CMD ["yarn", "watch-ts"]
