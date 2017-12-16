FROM node

MAINTAINER Gustavo Apolinario <gustavo.guss@gmail.com>

RUN apt-get update && apt-get upgrade -y \
    && apt-get clean

RUN mkdir /app
WORKDIR /app

COPY ./prod/package.json /app/
RUN npm install
COPY ./prod/index.js /app/

COPY app/build /app/build

EXPOSE 3000

CMD [ "npm", "start" ]
