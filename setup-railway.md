# Guía Paso a Paso para Railway

## Paso 1: Crear Proyecto en Railway

1. Ve a [railway.app](https://railway.app)
2. Inicia sesión con GitHub
3. Haz clic en "New Project"
4. Selecciona "Deploy from GitHub repo"
5. Busca tu repositorio: `juanpablo686/trabajo-finalnode`
6. Selecciónalo y haz clic en "Deploy"

## Paso 2: Agregar Base de Datos MySQL

1. En tu proyecto, haz clic en "New Service"
2. Selecciona "Database" → "MySQL"
3. Railway creará automáticamente una base de datos MySQL

## Paso 3: Configurar Variables de Entorno

1. Ve a tu proyecto principal (no la base de datos)
2. Ve a la pestaña "Variables"
3. Agrega estas variables (usa los valores de tu base de datos):

```
DB_HOST=tu_host_de_railway
DB_USER=tu_usuario_de_railway
DB_PASSWORD=tu_password_de_railway
DB_DATABASE=railway
DB_PORT=3306
```

## Paso 4: Obtener Credenciales de la Base de Datos

1. Ve a tu servicio MySQL en Railway
2. Haz clic en "Connect"
3. Copia los valores que aparecen ahí
4. Usa esos valores en las variables de entorno

## Paso 5: Verificar Despliegue

1. Ve a la pestaña "Deployments"
2. Espera a que termine el deploy
3. Haz clic en el dominio que te da Railway
4. Agrega `/test-db` al final de la URL para probar

## URLs de Prueba

- **Test de conexión**: `https://tu-app.railway.app/test-db`
- **API de empleados**: `https://tu-app.railway.app/api/employees` 