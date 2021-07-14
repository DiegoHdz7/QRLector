
const express = require('express');
const router = express.Router();

const User = require('../schemes/user');


router.get('/', (req, res, next) => {
    res.render('index.html', {title:'Inicio'});
});

router.get('/aboutUs', (req,res)=>{
    res.render('aboutUs.html', {title:'Acerca de nosotros'});

});

router.get('/services', (req,res)=>{
    res.render('services.html', {title:'Servicios'});

});

router.get('/permits', (req,res)=>{
    res.render('permits.html', {title:'Permisos'});

});

router.get('/galery', (req,res)=>{
    res.render('galery.html', {title:'Galeria'});

});

router.get('/ourTeam', (req,res)=>{
    res.render('ourTeam.html', {title:'Nuestro equipo'});

});

router.get('/contact', (req,res)=>{
    res.render('contact.html', {title:'Contacto'});

});

router.get('/jobBank', (req,res)=>{
    res.render('jobBank.html', {title:'Bolsa de trabajo'});

});

router.post('/login', async (req, res) => {

    const userFound = await User.find({ email: req.body.email });
    const userExist = await User.exists({ email: req.body.email });
    let canLogin = false;

    console.log('datos recibidos: ');
    console.log(req.body);

    if (userExist && userFound[0].password === req.body.password ) {
        console.log("usuario encontrado");
        console.log(userFound);
        console.log('password: '+userFound[0].password);

        
        res.json({canLogin:true});
       
     
        
    }
    else {
        console.log('usuario o contraseña no coinciden');
        console.log("dato enviado");
        console.log({userExist:userExist});
        res.json({canLogin:false});
    }
    

});




module.exports = router;