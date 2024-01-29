import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import passport from "passport";
import { Strategy } from "passport-local";
import "dotenv/config";

const app = express();
const port = 3000;
const API_URL = "https://covers.openlibrary.org/b/isbn/";

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

const db = new pg.Pool({
  database: process.env.DB,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const getBooksFromDb = async () => {
  const result = await db.query("SELECT * FROM books ORDER BY id ASC ");
  return result.rows;
};

app.get("/", async (req, res) => {
  const books = await getBooksFromDb();
  let message = "";
  if (req.session.messages) {
    message = req.session.messages[0];
  }

  res.status(200);
  res.render("index.ejs", {
    books: books,
    isAuthenticated: req.isAuthenticated(),
    message: message,
  });
});

app.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect("/");
  });
});

app.post("/new", async (req, res) => {
  const { title, author, rating, review, isbn } = req.body;
  const ratingInt = rating ? parseInt(rating) : 0;
  const linkImage = `${API_URL}${isbn}-M.jpg`;

  try {
    await db.query(
      "INSERT INTO books(title, author, rating, review, isbn, link_image) VALUES ($1, $2, $3, $4, $5, $6)",
      [title, author, ratingInt, review, isbn, linkImage]
    );
    res.status(201);
  } catch (error) {
    res.status(500).send("Internal Server error");
  }
  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  const { id, title, author, rating, review, isbn } = req.body;
  const idInt = parseInt(id);
  const ratingInt = parseInt(rating);
  const linkImage = `${API_URL}${isbn}-M.jpg`;
  try {
    await db.query(
      "UPDATE books SET title = $2, author = ($3), rating = ($4), review = ($5), isbn = ($6), link_image = ($7) WHERE id = $1",
      [idInt, title, author, ratingInt, review, isbn, linkImage]
    );
    res.status(200);
  } catch (error) {
    throw error;
    res.status(500).send("Internal Server error");
  }
  res.redirect("/");
});

app.post("/delete", async (req, res) => {
  const id = parseInt(req.body.id);
  console.log(id);
  try {
    await db.query("DELETE FROM books WHERE id = $1", [id]);
    res.status(204);
  } catch (error) {
    res.status(500).send("Internal Server Error");
    throw error;
  }
  res.redirect("/");
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
    failureMessage: "Incorrect Username or Password",
  }),
  (req, res) => {
    console.log(req.body);
  }
);

passport.use(
  "local",
  new Strategy(async function verify(username, password, cb) {
    try {
      const result = await db.query("SELECT * FROM users WHERE email = $1", [
        username,
      ]);
      console.log(result);
      if (result.rows.length > 0) {
        const user = result.rows[0];
        const hashedPassword = user.password;
        bcrypt.compare(password, hashedPassword, (err, valid) => {
          if (err) {
            console.error("Error comparing passwords: ", err);
            return cb(err);
          } else {
            if (valid) {
              return cb(null, user);
            } else {
              return cb(null, false);
            }
          }
        });
      } else {
        return cb("User not found");
      }
    } catch (err) {
      console.error(err);
    }
  })
);

// passport.use(
//   new Strategy(async function verify(username, password, cb) {
//     try {
//       const result = await db.query("SELECT * FROM users WHERE email = $1 ", [
//         username,
//       ]);
//       if (result.rows.length > 0) {
//         const user = result.rows[0];
//         if (password === user.password) {
//           console.log("login success");
//           return cb(null, user);
//         } else {
//           console.log("wrong password");
//           return cb(null, false);
//         }
//       } else {
//         console.log("User not found");
//         return cb("User not found");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   })
// );

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
