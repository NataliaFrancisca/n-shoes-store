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


app.get('/products/:id', (req, res) => {
    const productFiltered= products.filter(product => product.id == req.params.id);
    res.render('product', {productFiltered})
})

app.get('/products', (req, res) => {
    res.render('products', {products})
})

// HOME - PRODUTOS
app.get('/', (req, res) => {
    res.render('home', {products})
})

app.listen(3000, () => {
    console.log("🔥 Server is running! localhost:3000")
})