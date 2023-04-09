FROM node:17-alpine

WORKDIR /home/app/frontend

COPY /home/build/workspace/example /home/app/frontend

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]
