import { config } from "dotenv";
config();

// Función para extraer credenciales de DATABASE_URL
const parseDatabaseUrl = (url) => {
  if (!url) return null;
  
  try {
    // Formato: mysql://usuario:password@host:puerto/database
    const match = url.match(/mysql:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);
    if (match) {
      return {
        user: match[1],
        password: match[2],
        host: match[3],
        port: parseInt(match[4]),
        database: match[5]
      };
    }
  } catch (error) {
    console.error('Error parsing DATABASE_URL:', error);
  }
  return null;
};

// Intentar usar DATABASE_URL primero, luego variables individuales
const databaseUrl = process.env.DATABASE_URL;
const parsedUrl = parseDatabaseUrl(databaseUrl);

export const PORT = process.env.PORT || 3000;
export const DB_HOST = parsedUrl?.host || process.env.DB_HOST || process.env.MYSQL_HOST || "localhost";
export const DB_USER = parsedUrl?.user || process.env.DB_USER || process.env.MYSQL_USER || "fazt";
export const DB_PASSWORD = parsedUrl?.password || process.env.DB_PASSWORD || process.env.MYSQL_PASSWORD || "faztpassword";
export const DB_DATABASE = parsedUrl?.database || process.env.DB_DATABASE || process.env.MYSQL_DATABASE || "companydb";
export const DB_PORT = parsedUrl?.port || process.env.DB_PORT || process.env.MYSQL_PORT || 3306;
