const express = require('express');
const hbs = require('hbs');

var app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req,res)=>{
    res.render('home.hbs', {
        tituloPagina: 'Home desde el server',
        fechaActual: new Date().getFullYear()
    })
});

app.get('/contacto',(req,res)=>{
    res.send('<h1>Contactanos</h1>')
});

app.get('/ayuda',(req,res)=>{
    res.render('ayuda.hbs', {
     tituloPagina: 'Ayuda desde server',
     fechaActual: new Date().getFullYear()  
    })
});


app.listen(3000);
