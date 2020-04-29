const express = require ('express');
const morgan = require('morgan');
const app = express();

//Settings
app.set('port',3000);
//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//Routes
//app.use(require('./routes'));
app.use('/api/movies',require('./routes/movies'));
app.use('/api/cities',require('./routes/cities'));
app.use('/api/locals',require('./routes/locals'));
app.use('/api/users',require('./routes/users'));
app.use('/api/users',require('./routes/products_local'));
//Startings server
app.listen(app.get('port'),()=>{
    console.log("server on port "+app.get('port'));
});
