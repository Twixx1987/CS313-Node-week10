const express = require('express');
const path = require('path');
const { Client } = require('pg');
const PORT = process.env.PORT || 5000;

const connectionString = process.env.DATABASE_URL ||
    'postgres://iaaozceadeifaz:117a683a2caa80bae52baab6b9a690894ad5f023a986622cabf55d8de5420e7e@ec2-54-83-8-246.compute-1.amazonaws.com:5432/d622jstp7u5qmp';

const db = new Client({
    connectionString: connectionString,
    ssl: true
});

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .get('/getPerson', (req, res) => {
        const { id } = req.query;

        db.connect().then(() => {
            db.query(`SELECT * FROM person WHERE id = ${id}`).then(result => {
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(result.rows[0]));
                console.log(JSON.stringify(result.rows[0]));
                db.end();
            });
        });
    })
    .listen(PORT, () => console.log(`Listening on ${PORT}`));