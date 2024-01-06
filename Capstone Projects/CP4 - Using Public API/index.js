import axios from "axios";
import express from "express";

const app = express();
const port = 3000;
const API_URL = "https://api.chucknorris.io/jokes/random";

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const imageNumber = Math.floor(Math.random() * 5 + 1);
    const result = await axios.get(API_URL);
    res.render("index.ejs", {
        data: result.data,
        imageNumber:  imageNumber});
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
