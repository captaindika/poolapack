FROM node:14

WORKDIR /poolapack-app
COPY package.json .
RUN npm install
COPY . .
CMD npm start
