# ----------------------------------------------------
# STAGE 1: BUILD (Compilación de la aplicación estática)
# ----------------------------------------------------
# Usamos una imagen de Node para instalar dependencias y compilar el código.
FROM node:20-alpine AS builder

# Establece variables de entorno si son necesarias durante la compilación
# Ejemplo: RUN envsubst '$$REACT_APP_API_URL' < ./src/config.js > ./src/config.temp.js

WORKDIR /app

# 1. Copia los archivos de definición de dependencias
COPY package*.json ./

# 2. Instala las dependencias
RUN npm install

# 3. Copia el resto del código fuente
COPY . .

# 4. Ejecuta el comando de compilación (esto crea la carpeta 'build' o 'dist')
# NOTA: Ajusta el comando 'run build' según tu framework (ej. 'npm run build' o 'ng build')
RUN npm run build

# ----------------------------------------------------
# STAGE 2: PRODUCTION (Servir los archivos estáticos con Nginx)
# ----------------------------------------------------
# Usamos la imagen oficial de Nginx, que es muy pequeña y está optimizada para servir archivos estáticos.
FROM nginx:alpine

# Copia la configuración personalizada de Nginx (Opcional: solo si necesitas modificarlo)
# COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copia los archivos estáticos compilados desde la etapa 'builder' al directorio de Nginx.
# NOTA: La carpeta de salida de la compilación puede ser 'build', 'dist', o 'www'.
# Asegúrate de usar la ruta correcta (ej: /app/build)
COPY --from=builder /app/build /usr/share/nginx/html

# Permite que el contenedor escuche en el puerto 80 (puerto por defecto de Nginx)
EXPOSE 80

# El comando CMD predeterminado de Nginx ya es iniciar el servidor, así que no es necesario sobreescribirlo.
# CMD ["nginx", "-g", "daemon off;"]
