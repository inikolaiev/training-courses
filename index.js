const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const homeRoute = require('./routes/home');
const aboutRoute = require('./routes/about')
const mongoose = require('mongoose');
const mongoDBUrl = 'mongodb+srv://igo:1111@cluster0.1zcfovv.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 3000
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

async function start () {
    try {
        await mongoose.connect(mongoDBUrl, { useNewUrlParser: true });

        app.listen(PORT, ()=> {
            console.log(`server is running on port: ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start();
