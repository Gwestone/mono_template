FROM node:18-alpine3.15 AS builder
WORKDIR /backend

#EXPOSE 5173

COPY . .
RUN npm install -g pnpm
RUN npm install -g typescript
# Files required by pnpm install
COPY package.json pnpm-lock.yaml ./

RUN pnpm install

# Bundle app source
COPY . .

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]

#FROM nginx:1.21.0-alpine as production
#ENV NODE_ENV production
## Add your nginx.conf
#RUN rm /etc/nginx/conf.d/default.conf
#COPY nginx.conf /etc/nginx/conf.d/default.conf
## Expose port
#EXPOSE 8080
## Start nginx
#CMD ["nginx", "-g", "daemon off;"]
