import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import pool from './db.js';

console.log(bcrypt)

dotenv.config();
// console.log("------------------------------------------------------------------")
// console.log("------------------------------------------------------------------")
// console.log("------------------------------------------------------------------")
// console.log("Linia de mai jos este dotenv.config()")
// console.log(dotenv.config())



const app = express();
// console.log("------------------------------------------------------------------")
// console.log("------------------------------------------------------------------")
// console.log("------------------------------------------------------------------")
// console.log("Linia de mai jos este app adica express ")
// console.log(app);



app.use(cors());
//Cross-Origin Resource Sharing
// console.log("------------------------------------------------------------------")
// console.log("------------------------------------------------------------------")
// console.log("------------------------------------------------------------------")
// console.log("Linia de mai jos este app.use(cors())")
// console.log(app.use(cors()));


app.use(express.json());
// console.log("------------------------------------------------------------------")
// console.log("------------------------------------------------------------------")
// console.log("------------------------------------------------------------------")
// console.log("Linia de mai jos este app.use(express.json())")
// console.log(app.use(express.json()));




// ── ÎNREGISTRARE ──────────────────────────────────────
app.post('/api/register', async (req, res) => {


    



    const { nume, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query(
            'INSERT INTO utilizatori (nume, email, parola) VALUES ($1, $2, $3) RETURNING id',
            [nume, email, hashedPassword]
        );
        res.json({ success: true, userId: result.rows[0].id });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// ── LOGIN ─────────────────────────────────────────────
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await pool.query(
            'SELECT * FROM utilizatori WHERE email = $1', [email]
        );
        if (result.rows.length === 0)
            return res.status(401).json({ error: 'Email sau parolă incorectă' });

        const user = result.rows[0];
        const valid = await bcrypt.compare(password, user.parola);
        if (!valid)
            return res.status(401).json({ error: 'Email sau parolă incorectă' });

        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.json({ success: true, token, nume: user.nume });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
//
app.get('/api/test', (req, res) => {
    res.json({
        success: true,
        message: 'Serverul functioneaza!'
    });
});
// ── BOOKING ───────────────────────────────────────────
app.post('/api/booking', async (req, res) => {
    const { nume, telefon, animal, data, tipProgramare } = req.body;
    try {
        await pool.query(
            'INSERT INTO programari (nume, telefon, animal, data, tip_programare) VALUES ($1, $2, $3, $4, $5)',
            [nume, telefon, animal, data, tipProgramare]
        );
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(process.env.PORT, () =>
    console.log(`Server pornit pe portul ${process.env.PORT}`)
);
