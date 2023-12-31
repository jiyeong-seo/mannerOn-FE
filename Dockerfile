FROM node:18 as build-stage
WORKDIR /app
ADD . .
RUN npm install
RUN npm run build
FROM nginx:stable-alpine as production-stage
EXPOSE 3000
COPY  ./nginx.conf /etc/nginx/conf.d/default.conf 
COPY --from=build-stage /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]