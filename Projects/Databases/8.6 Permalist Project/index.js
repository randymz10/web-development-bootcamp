import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db = new pg.Client({
  database: "permalist",
  host: "localhost",
  user: "randy",
  password: "2439",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

app.get("/", async (req, res) => {
  const result = await db.query("SELECT * FROM items ORDER BY id ASC");
  items = result.rows;
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", (req, res) => {
  const item = req.body.newItem;
  // items.push({ title: item });
  console.log(item);
  db.query("INSERT INTO items (title) VALUES ($1)", [item]);
  res.redirect("/");
});

app.post("/edit", (req, res) => {
  const item = {
    id: parseInt(req.body.updatedItemId),
    title: req.body.updatedItemTitle,
  };  
  db.query('UPDATE items SET title = $1 WHERE id = $2', [item.title, item.id]);
  res.redirect('/');
});

app.post("/delete", (req, res) => {
  const id = parseInt(req.body.deleteItemId);
  db.query('DELETE FROM items WHERE id = $1', [id]);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
