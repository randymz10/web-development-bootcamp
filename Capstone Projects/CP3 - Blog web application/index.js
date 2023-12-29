import express from "express";
import BodyParser from "body-parser";
import Article from "./models/Article.js";

const app = express();
const port = 3000;
const articles = [];

app.use(express.static('public'));
app.use(BodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('index.ejs', {articles: articles});
});

app.post('/new',(req, res) =>{
    const newPost = new Article(req.body.title, req.body.content, req.body.author);
    articles.push(newPost);
    newPost.id = articles.indexOf(newPost);
    // console.log(articles);

    res.redirect('/');
});

app.post('/edit', (req, res) => {
    const idArticle = Number(req.body.id);
    const editPost = articles.find((element) => {return element.id === idArticle});
    editPost.title = req.body.title;
    editPost.content = req.body.content;
    editPost.author = req.body.author;
    res.redirect('/');
});

app.post('/delete', (req, res) =>{
    const idArticle = Number(req.body.id);
    articles.splice(idArticle, 1);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
}); 