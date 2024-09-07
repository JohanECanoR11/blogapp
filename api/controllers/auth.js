import {db} from "../db.js"

export const register = (req, res) => {
  // Revisar si existe el usuario

  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("¡El usuario ya existe!");

    
  });
};

export const login = (req, res) => {

};

export const logout = (req, res) => {

};