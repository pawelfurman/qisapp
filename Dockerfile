FROM node:lts-alpine as builds

WORKDIR /usr/src/app
COPY ./package.json ./

RUN ls
RUN npm install
COPY . .
RUN ls

RUN npm install -g @angular/cli
RUN npm install -g @nrwl/cli
RUN npm install -g nx

# ENV NODE_ENV=production

RUN nx build backend-server --prod
RUN nx build frontend-angular --prod
# Build front end

FROM nginx

WORKDIR /usr/share/nginx/html

COPY --from=builds /usr/src/app/dist/apps/frontend-angular /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80