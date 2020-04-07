FROM node:12-alpine

EXPOSE 8000

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

RUN mkdir /app
WORKDIR /app

ADD package.json yarn.lock /app/
RUN yarn --pure-lockfile
ADD . /app

## THE LIFE SAVER
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && yarn docker:start

