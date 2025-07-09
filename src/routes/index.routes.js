import { Router } from "express";
import { pool } from "../db.js";
import { initializeDatabase } from "../db.js";
import { DB_HOST, DB_USER, DB_DATABASE, DB_PORT } from "../config.js";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to my API",
  });
});

// Endpoint para probar la conexión a la base de datos
router.get("/test-db", async (req, res) => {
  try {
    // Mostrar configuración (sin password por seguridad)
    console.log("Database config:", {
      host: DB_HOST,
      user: DB_USER,
      database: DB_DATABASE,
      port: DB_PORT
    });

    // Probar conexión
    const [rows] = await pool.query("SELECT 1 as test");
    
    res.json({
      message: "Database connection successful",
      test: rows[0],
      config: {
        host: DB_HOST,
        user: DB_USER,
        database: DB_DATABASE,
        port: DB_PORT
      }
    });
  } catch (error) {
    console.error("Database test error:", error);
    res.status(500).json({
      message: "Database connection failed",
      error: error.message,
      code: error.code,
      config: {
        host: DB_HOST,
        user: DB_USER,
        database: DB_DATABASE,
        port: DB_PORT
      }
    });
  }
});

// Endpoint para inicializar manualmente la base de datos
router.get("/init-db", async (req, res) => {
  try {
    await initializeDatabase();
    res.json({
      message: "Database initialized successfully",
      status: "success"
    });
  } catch (error) {
    console.error("Database initialization error:", error);
    res.status(500).json({
      message: "Database initialization failed",
      error: error.message
    });
  }
});

export default router;
