FROM node:18-alpine

WORKDIR /home/app/frontend

COPY . .

RUN yarn install

EXPOSE 3000

CMD ["yarn", "run", "dev"]
