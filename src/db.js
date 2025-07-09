import { createPool } from "mysql2/promise";
import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from "./config.js";

export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Función para inicializar la base de datos
export const initializeDatabase = async () => {
  try {
    // Crear la tabla employee si no existe
    await pool.query(`
      CREATE TABLE IF NOT EXISTS employee (
        id INT(11) NOT NULL AUTO_INCREMENT,
        name VARCHAR(45) DEFAULT NULL,
        salary INT(11) DEFAULT NULL, 
        PRIMARY KEY(id)
      )
    `);

    // Verificar si la tabla tiene datos
    const [rows] = await pool.query("SELECT COUNT(*) as count FROM employee");
    
    if (rows[0].count === 0) {
      // Insertar datos de ejemplo si la tabla está vacía
      await pool.query(`
        INSERT INTO employee (name, salary) VALUES 
        ('Ryan Ray', 20000),
        ('Joe McMillan', 40000),
        ('John Carter', 50000)
      `);
      console.log('✅ Database initialized with sample data');
    } else {
      console.log('✅ Database already has data');
    }
  } catch (error) {
    console.error('❌ Database initialization failed:', error.message);
  }
};

// Test the connection
pool.getConnection()
  .then(connection => {
    console.log('✅ Database connected successfully');
    connection.release();
    // Inicializar la base de datos después de conectar
    initializeDatabase();
  })
  .catch(err => {
    console.error('❌ Database connection failed:', err.message);
    console.log('Database config:', {
      host: DB_HOST,
      user: DB_USER,
      database: DB_DATABASE,
      port: DB_PORT
    });
  });
