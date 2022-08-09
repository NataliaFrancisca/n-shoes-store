const express = require("express");
const exphbs = require('express-handlebars');

const app = express();

const products = require("./database");

const hbs = exphbs.create({
    partialsDir: ["views/partials"]
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')
app.use(express.static('public'))


// HOME - PRODUTOS
app.get('/', (req, res) => {

    res.render('home', {products})
})

app.listen(3000, () => {
    console.log("🔥 Server is running!")
})