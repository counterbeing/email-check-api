FROM node:10.15.3-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
EXPOSE 25
EXPOSE 465
EXPOSE 587
CMD [ "node", "index.js" ]
