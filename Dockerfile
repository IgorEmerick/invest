FROM --platform=linux/amd64 node:20

WORKDIR /app/

COPY . /app/

RUN npm install

RUN npm run build

RUN rm -rf tmp/*

EXPOSE 80

CMD ["node", "./dist/index.js"]