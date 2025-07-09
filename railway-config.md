# Configuración de Railway con MySQL URL

## Tu URL de MySQL:
```
${{ MySQL-a7Qv.MYSQL_URL }}
```

## Pasos para configurar:

### 1. Obtener credenciales de la URL
La URL de Railway tiene este formato:
```
mysql://usuario:password@host:puerto/database
```

### 2. En Railway Dashboard:
1. Ve a tu proyecto principal (NO la base de datos)
2. Ve a la pestaña "Variables"
3. Agrega estas variables:

```
DB_HOST=containers-us-west-XX.railway.app
DB_USER=root
DB_PASSWORD=tu_password_de_railway
DB_DATABASE=railway
DB_PORT=3306
```

### 3. Para obtener los valores exactos:
1. Ve a tu servicio MySQL
2. Haz clic en "Connect" o "Variables"
3. Busca la información de conexión

### 4. Alternativa - Usar la URL completa:
Si Railway te permite usar la URL completa, puedes agregar:
```
DATABASE_URL=${{ MySQL-a7Qv.MYSQL_URL }}
```

Y modificar el código para usar esa variable.

## Verificación:
Después de configurar las variables, Railway hará un redeploy automáticamente. 