# Dockerfile
FROM node:23.7.0

WORKDIR /app

# Kopeeri package.json ja package-lock.json ning paigalda sõltuvused
COPY package*.json ./
RUN npm install -g typescript
RUN npm install

# Paigalda PM2 globaalselt
RUN npm install -g pm2

# Kopeeri rakenduse kood ja ecosystem konfiguratsioon
COPY . .
# Käivita rakendus PM2 konteineris
CMD ["pm2-runtime", "ecosystem.config.js"]