const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const app = express();
const port = 8000

app.use(bodyParser.urlencoded({ extended: true }))

// создаем объект MongoClient и передаем ему строку подключения
const mongoClient = new MongoClient(db.url, { useNewUrlParser: true });
mongoClient.connect(function(err, client){
    if(err){
        return console.log(err);
    }
    console.log('db connected')
    require('./app/routes')(app, client);
    app.listen(port, () => {
        console.log(`listen ${port}`)
    })
    
    
});
