
const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();



//settings
app.set('port',3000);

app.set('views', path.join(__dirname+'/HTML')); // views is a component from a express list to use in app.set
app.engine('html', require('ejs').renderFile);


console.log(path.join(__dirname+'/public'));

//Routes (external/other document)
app.use(require('./routes/routes.js'));
app.use(express.static(path.join(__dirname+'/public')));


//Listen

app.listen(app.get('port'));

