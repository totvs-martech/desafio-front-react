FROM node:12-alpine as build

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
COPY packages/components ./packages/components
COPY packages/website ./packages/website

RUN yarn install --pure-lockfile --non-interactive

WORKDIR /usr/src/app/packages/website
RUN yarn build

FROM node:12-alpine

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

COPY --from=build /usr/src/app/packages/components/package.json /usr/src/app/packages/components/package.json

COPY --from=build /usr/src/app/packages/website/package.json /usr/src/app/packages/website/package.json
COPY --from=build /usr/src/app/packages/website/.next /usr/src/app/packages/website/.next
COPY --from=build /usr/src/app/packages/website/public /usr/src/app/packages/website/public

ENV NODE_ENV production

RUN yarn install --pure-lockfile --non-interactive --production

WORKDIR /usr/src/app/packages/website

CMD ["npm", "start"]