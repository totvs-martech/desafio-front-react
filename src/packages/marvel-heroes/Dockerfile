FROM node:12

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/marvel-heroes
WORKDIR /usr/src/marvel-heroes

# Installing dependencies
COPY package*.json /usr/src/marvel-heroes/
RUN yarn install

# Copying source files
COPY . /usr/src/marvel-heroes

# Building app
RUN yarn build
EXPOSE 3000

# Running the app
CMD "yarn" "dev"