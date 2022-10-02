FROM node:18-alpine3.15 AS builder
WORKDIR /frontend

#EXPOSE 5173

COPY . .
RUN npm install -g pnpm
# Files required by pnpm install
COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --prod

# Bundle app source
COPY . .

RUN pnpm build

FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
COPY --from=builder /frontend/dist /usr/share/nginx/html
# Add your nginx.conf
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
