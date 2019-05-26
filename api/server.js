const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser')
const db = require('./config/db');
var cors = require('cors');
const app = express();
const port = 8081

app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});


MongoClient.connect( db.url, (err, client) => {
    if(err) throw err;
    console.log('DB CONNECTED')
    const db = client.db('Tinder')
    app.listen(port, function() {
        console.log(`SERVER LISTENING ON: ${port}`)
    })

    // РОУТЫ 

    app.get('/api/girls', (req, response) => {
        let collection = {}        
        db.collection('train_img_set').find().toArray(function(err, res) {
            if(err) console.log(err);
            collection = Object.assign({}, res)
            console.log(collection)
            response.send(collection)
        })       
    })
    app.get('/api/prediction', (req, response) => {
        let collection = {}        
        db.collection('recommendation_model').find().toArray(function(err, res) {
            if(err) console.log(err);
            collection = Object.assign({}, res)
            console.log(collection)
            response.send(collection)
        })       
    })
    app.get('/api/saveGirl', (req, response) => {
        console.log(req.query.id)
        let girlId = Number(req.query.id)
        let girlResult = Number(req.query.result)
        let collection = {}        
        db.collection('train_img_set').updateOne({id: girlId}, {$set: {result: girlResult}})
        
    })
    
})











// создаем объект MongoClient и передаем ему строку подключения
// const mongoClient = new MongoClient(db.url, { useNewUrlParser: true });

// mongoClient.connect(db.url, function(err, client){
//     if(err){
//         return console.log(err);
//     }
//     const dataBase = client.db('Tinder')
//     const collection = dataBase.collection('train_img_set').find()
//     console.log(collection)
//     
//     app.listen(port, () => {
        // console.log(`listen ${port}`)
        // console.log('-----------------------')
        // console.log(client.db('Tinder'))
//     })
// });

