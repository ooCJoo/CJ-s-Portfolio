const express = require('express');
const morgan = require('morgan');
const path = require("path")


//execute express
const app = express();

app.use(express.static(path.join(__dirname,'/public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//home page
app.get('/', (req, res) => {
    res.render('home');
})

app.get('/contact', (req, res) => {
    res.render('about');
})

app.get('/projects', (req, res) =>{
    res.render('projects')
})

app.get('/accomplishments', (req, res) => {
    res.render('accomplishments')
})

//cant find the web
app.get('*', (req, res) => {
    res.render('404');
})

app.listen(3000, () =>{
    console.log("Listening to port 3000");
})