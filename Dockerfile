FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

##RUN npm run build
EXPOSE 3002
CMD [ "npm", "start" ]


#docker build -t adapter .
#docker run -it -p 3002:3002 adapter