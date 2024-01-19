import express from 'express';
import axios from 'axios';
import pg from 'pg';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const API_URL = '';
const db = new pg.Pool({
    database: 'books',
    host: 'localhost',
    user: 'randy',
    password: '2439',
    port: 5432
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('index.ejs', {title: 'Helooooo!'});
});

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});