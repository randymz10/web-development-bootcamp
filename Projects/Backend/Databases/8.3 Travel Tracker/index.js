import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import { render } from "ejs";

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

const getCountries = async () => {
  let countries = "";
  const result = await db.query("SELECT * FROM visited_countries");
  result.rows.forEach((country) => {
    countries += `${country.country_code},`;
  });
  return { countries: countries, total: result.rowCount };
};

app.get("/", async (req, res) => {
  // Write your code here.
  const countries = getCountries();

  res.render("index.ejs", {
    countries: (await countries).countries,
    total: (await countries).total,
  });
});

app.post("/add", async (req, res) => {
  try {
    const visitedCountry = await db.query(
      `
    SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%'`,
      [req.body.country.toLowerCase()]
    );

    if (visitedCountry.rowCount > 0) {
      try {
        await db.query(
          "INSERT INTO visited_countries (country_code) VALUES ($1)",
          [visitedCountry.rows[0].country_code]
        );
        res.redirect('/');
      } catch (error) {
        console.error(error);
        const countries = getCountries();
        res.render("index.ejs", {
          error: "Country has already been added, try again",
          countries: (await countries).countries,
          total: (await countries).total,
        });
      }
    } else {
      const countries = getCountries();
      res.render("index.ejs", {
        error: "Country does not exit, try again",
        countries: (await countries).countries,
        total: (await countries).total,
      });
      res.status(500);
    }
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
