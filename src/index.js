
//modules
const express = require('express');
const ejs = require('ejs');// not necessary
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');



// starting express
const app = express();

app.use(cors());

//db connection   //ALERT! CAMBIAR DB cuando se use local y cloud
//const mongodbURI = "mongodb+srv://diegohdz:diegohdz@cluster0.rorin.mongodb.net/qr-lector?retryWrites=true&w=majority";
//mongoose.connect(mongodbURI, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect('mongodb://localhost/qr_lector', {useNewUrlParser: true, useUnifiedTopology: true});


//static files
app.use(express.static(path.join(__dirname+'/public')));


//settings
app.set('port',process.env.PORT || 3000);
app.set('views', path.join(__dirname+'/views')); // views is a component from a express list to use in app.set
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

