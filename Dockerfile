# Dockerfile
FROM node:23.7.0

WORKDIR /app

# Kopeeri package.json ja package-lock.json ning paigalda sõltuvused
COPY package*.json ./

RUN npm install -g typescript
RUN npm install

# Paigalda PM2 globaalselt


# Kopeeri rakenduse kood ja ecosystem konfiguratsioon
COPY . .

RUN npm run build

FROM nginx:alpine AS production

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build /app/dist .

EXPOSE 5173
# Käivita rakendus PM2 konteineris
CMD ["nginx", "-g", "daemon off;"]