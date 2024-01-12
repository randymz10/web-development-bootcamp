import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "randy",
  password: "2439",
  host: "localhost",
  database: "world",
  port: 5432,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
db.connect();

app.get("/", async (req, res) => {
  // Write your code here.
  let countries = "";
  const result = await db.query("SELECT * FROM visited_countries");
  result.rows.forEach((country) => {
    countries += `${country.country_code},`;
  });
  
  res.render("index.ejs", {
    countries: countries,
    total: result.rowCount,
  });
});

app.post("/add", async(req, res) => {
  try {
    const visitedCountry = await db.query(`
    SELECT country_code
    FROM countries 
    WHERE country_name = $1`, [req.body.country]);
    
    await db.query('INSERT INTO visited_countries (country_code) VALUES ($1)', [visitedCountry.rows[0].country_code]);

    res.redirect('/');
    
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal error');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
