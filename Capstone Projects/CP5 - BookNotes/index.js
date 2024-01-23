import express from "express";
import axios from "axios";
import pg from "pg";
import bodyParser from "body-parser";
// import { Book } from "./models/Book.js";

const app = express();
const port = 3000;
const API_URL = "https://covers.openlibrary.org/b/isbn/";
const db = new pg.Pool({
  database: "books",
  host: "localhost",
  user: "randy",
  password: "2439",
  port: 5432,
});

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const getBooksFromDb = async () => {
  const result = await db.query("SELECT * FROM books ORDER BY id ASC ");
  return result.rows;
};

app.get("/", async (req, res) => {
  const books = await getBooksFromDb();
  console.log(books[0]);
  res.status(200);
  res.render("index.ejs", { books });
});

app.post("/new", async(req, res) => {

  const {title, author, rating, review, isbn} = req.body;
  const ratingInt = parseInt(rating);
  const linkImage = `${API_URL}${isbn}-M.jpg`;
  console.log(ratingInt);
    try {
        await db.query('INSERT INTO books(title, author, rating, review, isbn, link_image) VALUES ($1, $2, $3, $4, $5, $6)', [title, author, ratingInt, review, isbn, linkImage]);
        res.status(201);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server error');
    }
    res.redirect('/');

});

app.post('/edit', async(req, res) => {
  const {id, title, author, rating, review, isbn} = req.body;
  const idInt = parseInt(id);
  const ratingInt = parseInt(rating);
  const linkImage = `${API_URL}${isbn}-M.jpg`;
    try {
        await db.query('UPDATE books SET title = $2, author = ($3), rating = ($4), review = ($5), isbn = ($6), link_image = ($7) WHERE id = $1', [idInt, title, author, ratingInt, review, isbn, linkImage]);
        res.status(200);
    } catch (error) {
        throw error;
        res.status(500).send('Internal Server error');
    }
    res.redirect('/');

});

app.post('/delete', async(req, res) => {
  const id = parseInt(req.body.id);
  console.log(id);
  try {
    await db.query('DELETE FROM books WHERE id = $1', [id]);
    res.status(204);
  } catch (error) {
    res.status(500).send('Internal Server Error');
    throw error;
  }
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
