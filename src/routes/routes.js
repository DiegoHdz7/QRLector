
const express = require('express');
const router = express.Router();

const User = require('../schemes/user');


router.get('/', (req, res, next) => {
    console.log(user);
    res.render('index.html');
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