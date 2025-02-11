# Dockerfile
# --- BUILD STAGE ---
FROM node:23.7.0 AS build

WORKDIR /app

# Kopeeri package.json ja package-lock.json ning paigalda sõltuvused
COPY package*.json ./

RUN npm install -g typescript
RUN npm install

# Paigalda PM2 globaalselt


# Kopeeri rakenduse kood ja ecosystem konfiguratsioon
COPY . .

RUN npm run build

# --- PRODUCTION STAGE ---
FROM nginx:alpine AS production

# Copy the custom Nginx configuration file into the container
COPY default.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build /app/dist .

EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]