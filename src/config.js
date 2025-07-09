import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || process.env.MYSQL_HOST || "localhost";
export const DB_USER = process.env.DB_USER || process.env.MYSQL_USER || "fazt";
export const DB_PASSWORD = process.env.DB_PASSWORD || process.env.MYSQL_PASSWORD || "faztpassword";
export const DB_DATABASE = process.env.DB_DATABASE || process.env.MYSQL_DATABASE || "companydb";
export const DB_PORT = process.env.DB_PORT || process.env.MYSQL_PORT || 3306;
