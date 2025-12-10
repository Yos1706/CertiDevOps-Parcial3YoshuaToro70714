# Proyecto Docker + EC2 + CI/CD
## 1. Requisitos Previos

Asegúrate de tener instalado el siguiente software:

* **Git:** Para clonar el repositorio.
* **Docker Desktop:** Para construir y ejecutar los contenedores localmente.
* **Docker Compose:** Para orquestar los tres servicios.

## 2. Pasos para la Ejecución Local (Desarrollo)

Sigue estos pasos para levantar toda la aplicación en tu máquina local:

### 2.1. Clonar el Repositorio

Abre tu terminal (Git Bash o CMD) y ejecuta:

'Bash
git clone [https://github.com/Yos1706/CertiDevOps-Parcial2YoshuaToro70714.git](https://github.com/Yos1706/CertiDevOps-Parcial2YoshuaToro70714.git)
cd CertiDevOps-Parcial2YoshuaToro70714

###2.2. Construir y Levantar los Contenedores
Ejecuta el siguiente comando para construir las imágenes del Frontend y Backend (usando sus respectivos Dockerfiles) y levantar los tres servicios (incluyendo PostgreSQL) en segundo plano:

'Bash
docker-compose up --build -d

###2.3. Acceso a la Aplicación Local
Una vez que los contenedores estén activos (puede tardar un minuto), puedes acceder a los servicios:

Aplicación Frontend (SPA): http://localhost/
API Backend (Endpoint de Prueba): http://localhost:5000/api/status

##3. URL Pública de la Aplicación
La aplicación está desplegada en una instancia EC2 de AWS y es accesible a través de la siguiente dirección IP pública:

URL Pública de Producción: http://18.188.245.210/

##4. Evidencia de Componentes
Para verificar el estado de los servicios en producción (EC2):

Verificación del Backend (API): http://18.188.245.210:5000/api/status
