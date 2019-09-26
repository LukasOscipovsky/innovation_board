FROM node:10.1

WORKDIR /usr/src/api

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
RUN npm install -g typescript
# If you are building your code for production
# RUN npm install --only=production

COPY . .

CMD [ "npm", "start" ]

EXPOSE 8080