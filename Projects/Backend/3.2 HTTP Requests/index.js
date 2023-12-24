import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Home')
});

app.get('/contact', (req, res) => {
    res.send('Contact')
});

app.get('/about', (req, res) => {
    res.send('About')
});

app.listen(3000, () => {
    console.log(`Server running on port ${port}`);
});