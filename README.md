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
git clone https://github.com/Yos1706/CertiDevOps-Parcial3YoshuaToro70714.git
cd CertiDevOps-Parcial3YoshuaToro70714

###2.2. Construir y Levantar los Contenedores
Ejecuta el siguiente comando para construir las imágenes del Frontend y Backend (usando sus respectivos Dockerfiles) y levantar los tres servicios (incluyendo PostgreSQL) en segundo plano:

'Bash
docker-compose up --build -d

###2.3. Acceso a la Aplicación Local
Una vez que los contenedores estén activos (puede tardar un minuto), puedes acceder a los servicios:

Aplicación Frontend (SPA): http://localhost/
API Backend (Endpoint de Prueba): http://localhost:5000/api/status

##3. URL Pública de la Aplicación
La aplicación está desplegada en AWS EC2 y cuenta con un stack de monitoreo activo:

Aplicación Web: http://3.143.253.133/

Dashboard de Monitoreo (Grafana): http://3.143.253.133:3000/

##4. Observabilidad y Monitoreo
Se implementó un stack de observabilidad para garantizar la salud de la infraestructura y la aplicación:

Métricas de Infraestructura: Recolectadas mediante Prometheus y Node Exporter.

Gestión de Logs: Centralizada con Grafana Loki y Promtail, permitiendo auditar eventos del Backend y Base de Datos sin acceso SSH.

Visualización: Dashboards personalizados en Grafana.

##5. Evidencia de Componentes
Para verificar el estado de los servicios en producción (EC2):

Verificación del Backend (API): http://3.143.253.133:5000/api/status

##6. Arquitectura del Stack
El proyecto utiliza Docker Compose para orquestar los siguientes servicios:

Frontend: Nginx sirviendo la SPA.

Backend: API en Express.js.

Base de Datos: PostgreSQL con persistencia en volúmenes.

Monitoreo: Prometheus (Métricas), Loki (Logs) y Grafana (Visualización).

##7. Pipeline CI/CD (GitHub Actions)
El flujo de despliegue automático consta de tres etapas:

Build & Push: Construcción de imágenes inmutables en Docker Hub.

Deploy: Actualización automática en la instancia EC2 mediante SSH.

##8. Seguridad y Buenas Prácticas
Gestión de Secretos: Uso de GitHub Secrets para proteger claves SSH y tokens de Docker Hub.

Principio de Mínimo Privilegio: Security Groups configurados para permitir tráfico solo en puertos esenciales (80, 22, 3000).

Aislamiento de Red: La base de datos y la API se comunican internamente a través de una red virtual de Docker, sin exposición directa a internet.

Notify: Notificación inmediata del estado del despliegue en un canal de Discord.
