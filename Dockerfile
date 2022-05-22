FROM node:16.15-alpine as node

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build --prod

FROM nginx:alpine

COPY --from=node /app/dist/colors-sequence /usr/share/nginx/html