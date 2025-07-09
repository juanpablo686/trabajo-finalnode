# Despliegue en Railway

## Configuración de Variables de Entorno en Railway

Para que tu aplicación se conecte correctamente a la base de datos en Railway, necesitas configurar las siguientes variables de entorno en el dashboard de Railway:

### Variables requeridas:

1. **DB_HOST** - Host de la base de datos MySQL de Railway
2. **DB_USER** - Usuario de la base de datos
3. **DB_PASSWORD** - Contraseña de la base de datos
4. **DB_DATABASE** - Nombre de la base de datos
5. **DB_PORT** - Puerto de la base de datos (normalmente 3306)

### Pasos para configurar:

1. Ve al dashboard de Railway
2. Selecciona tu proyecto
3. Ve a la pestaña "Variables"
4. Agrega las variables de entorno con los valores que te proporciona Railway

### Ejemplo de configuración:

```
DB_HOST=containers-us-west-XX.railway.app
DB_USER=root
DB_PASSWORD=tu_password_de_railway
DB_DATABASE=railway
DB_PORT=3306
```

### Verificación:

Una vez desplegado, puedes verificar que la conexión funciona revisando los logs de Railway. Deberías ver:
- ✅ Database connected successfully

Si ves errores de conexión, verifica que las variables de entorno estén correctamente configuradas.

## Base de datos local vs Railway

- **Local**: Usa `docker-compose.yml` para levantar MySQL localmente
- **Railway**: Usa la base de datos MySQL proporcionada por Railway 