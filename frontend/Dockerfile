# ==============================================================
# STAGE 1: BUILD (Compila la aplicación React)
# ==============================================================
FROM node:20-alpine AS build

# Create app directory
WORKDIR /app

# Copy ALL files necessary for the build now (including src and public)
# Esto invalida la caché si cualquier archivo cambia
COPY . .

# Install dependencies
RUN npm install

# Build the frontend
RUN npm run build

# ==============================================================
# STAGE 2: SERVE (Nginx)
# ==============================================================
FROM nginx:alpine

# 1. Seguridad: Crear usuario no-root (UID 1001)
RUN addgroup -g 1001 node \
    && adduser -u 1001 -G node -s /bin/sh -D node

# 2. Copiar la configuración de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# 🚨 CAMBIO CLAVE: Copia el index.html base primero y luego el resto de los archivos.
# Esto garantiza que el archivo index.html (que tiene el <div id="root">) se copie desde la carpeta public/
# Si usas la configuración 'COPY --from=build /app/build /usr/share/nginx/html',
# Docker toma la plantilla del bundler, que parece estar incompleta.

# Eliminamos la dependencia de /app/build y copiamos todo el contexto.
# Si tu Nginx.conf está configurado para buscar archivos estáticos, esto debería funcionar.

# Copia los archivos de producción (bundle) y la plantilla index.html
COPY --from=build /app/build /usr/share/nginx/html
# === LÍNEA ADICIONAL DE SOLUCIÓN ANTERIOR (DEBE QUEDAR) ===
COPY ./public/index.html /usr/share/nginx/html/index.html
# ===========================================================

# 5. Configurar permisos y cambiar a usuario no-root
RUN mkdir -p /var/cache/nginx/client_temp && chown -R 1001:1001 /var/cache/nginx
USER node

# Expose the application port
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
