import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import pool from './db.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/inregistreaza1', (req, res) => {
  console.log("=== A mers! Asta e o cerere GET ===");
  res.send("Serverul a primit cererea GET!");
});

app.post('/api/inregistreaza', (req, res) => {
    try {
        const { username, email, parola } = req.body;

        console.log("=== Date primite de la client ===");
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Parola:", parola);

        res.status(200).json({ message: "Succes! Datele au fost primite." });

    } catch (error) {
        console.error("A apărut o eroare pe server:", error);

        res.status(500).json({ error: "A intervenit o eroare pe server!" });
    }
});









app.listen(process.env.PORT, () =>
  console.log(`Server pornit pe portul ${process.env.PORT}`)
);