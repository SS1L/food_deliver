FROM node:14

EXPOSE 5000

RUN npm i npm@latest -g

COPY package.json package-lock.json* ./

RUN npm install --no-optional && npm cache clean --force

WORKDIR /opt
COPY . .

CMD ['node', 'api/app.js']