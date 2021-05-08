
//modules
const express = require('express');
const ejs = require('ejs');// not necessary
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');

// starting express
const app = express();

//db connection
mongoose.connect('mongodb://localhost/qr_lector', {useNewUrlParser: true, useUnifiedTopology: true});

//static files
app.use(express.static(path.join(__dirname+'/public')));


//settings
app.set('port',process.env.PORT || 3000);
app.set('views', path.join(__dirname+'/HTML')); // views is a component from a express list to use in app.set
app.engine('html', require('ejs').renderFile);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));// para convertir los formularios del cliente a JSON
app.use(express.json());

//importing routes
app.use(require('./routes/routes.js'));

//Listening 

app.listen(app.get('port'), ()=>{
    console.log(`server on port: ${app.get('port')}` );
    console.log(path.join(__dirname+'/views'));
});

