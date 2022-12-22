//required the library
const mongoose = require('mongoose');
//connect to the database
mongoose.connect('mongodb://localhost/contact_list_db');
//acquire the conncetion to check if it is successful 
const db = mongoose.connection;
//if there is an  error print erroe
db.on('error',console.error.bind(console,'error connecting to db'));
//if there is no error print successful
db.once('open' ,function(){
    console.log('Successfully connected to the database');
})

