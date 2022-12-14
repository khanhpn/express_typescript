FROM node:gallium-alpine

WORKDIR /app
COPY package.json .
COPY . .
RUN npm install

CMD npm start
