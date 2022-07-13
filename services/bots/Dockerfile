FROM node:16-alpine

ENV MODULE_PORT="3000"

WORKDIR /usr/src/myapp

COPY ["package.json", "package-lock.json*", "./"]

RUN ["npm", "install"]

COPY . .

CMD ["node", "app.js"]
