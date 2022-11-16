const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const homeRoute = require('./routes/home');
const aboutRoute = require('./routes/about')

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
app.use(homeRoute);
app.use(aboutRoute);

app.get('/about', (req, res) => {
    res.render('about')
})


const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
    console.log(`server is running on port: ${PORT}`)
})
