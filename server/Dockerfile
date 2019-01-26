FROM node:9.10.1

# Create app directory
WORKDIR /app

# To make nodemon work we kill the service on port 4001 everytime there is a change
# See config in nodemon.json
RUN apt-get update
RUN apt-get -y install lsof

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
RUN npm install --global kill-port
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 4001

CMD [ "npm", "start" ]

