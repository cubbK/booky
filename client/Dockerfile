# Stage 1
FROM node:9.10.1 as react-build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build


# Stage 2 - the production environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]