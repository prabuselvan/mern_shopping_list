const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const items = require('./routes/api/items');
const app=express();
app.use(bodyParser.json());
// db config
const db=require('./config/keys').mongoURI;
// console.log(db);

mongoose.connect(db, {useNewUrlParser: true})
        .then(()=> console.log('mongodb is connected'))
        .catch((err)=> console.log(err));

// use routes

app.use('/api/items',items);


const port = process.env.PORT || 5001;
app.listen(port,()=> console.log(`listening to port ${port}`))