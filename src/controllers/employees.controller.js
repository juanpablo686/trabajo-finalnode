import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employee");
    res.json(rows);
  } catch (error) {
    console.error("Database error in getEmployees:", error);
    return res.status(500).json({ 
      message: "Database error", 
      error: error.message,
      code: error.code 
    });
  }
};

export const getEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error("Database error in getEmployee:", error);
    return res.status(500).json({ 
      message: "Database error", 
      error: error.message,
      code: error.code 
    });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM employee WHERE id = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    console.error("Database error in deleteEmployee:", error);
    return res.status(500).json({ 
      message: "Database error", 
      error: error.message,
      code: error.code 
    });
  }
};

export const createEmployee = async (req, res) => {
  try {
    const { name, salary } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO employee (name, salary) VALUES (?, ?)",
      [name, salary]
    );
    res.status(201).json({ id: rows.insertId, name, salary });
  } catch (error) {
    console.error("Database error in createEmployee:", error);
    return res.status(500).json({ 
      message: "Database error", 
      error: error.message,
      code: error.code 
    });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, salary } = req.body;

    const [result] = await pool.query(
      "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
      [name, salary, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Employee not found" });

    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    console.error("Database error in updateEmployee:", error);
    return res.status(500).json({ 
      message: "Database error", 
      error: error.message,
      code: error.code 
    });
  }
};
