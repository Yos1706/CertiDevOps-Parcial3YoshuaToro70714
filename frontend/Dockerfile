# STAGE 1: BUILD
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# STAGE 2: SERVE (Nginx)
FROM nginx:alpine

# 1. Configurar usuario no-root para seguridad
RUN addgroup -g 1001 node && adduser -u 1001 -G node -s /bin/sh -D node

# 2. Copiar configuración de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# 3. COPIAR SOLO LA CARPETA BUILD (No sobreescribas el index.html después)
COPY --from=build /app/build /usr/share/nginx/html

# 4. Ajustar permisos para que el usuario 'node' pueda leer los archivos y manejar logs
RUN touch /tmp/nginx.pid && \
    chown -R node:node /tmp/nginx.pid /usr/share/nginx/html /var/cache/nginx /var/log/nginx

USER node

# Cambiamos a 8080 porque los usuarios no-root no pueden abrir el puerto 80 en Linux
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
