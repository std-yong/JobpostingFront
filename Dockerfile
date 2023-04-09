FROM node:17-alpine

WORKDIR /home/app/frontend

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]
