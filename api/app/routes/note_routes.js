module.exports = function(app, db) {
    app.post('/notes', (req, res) => {
        const database = db.db('itproger')
        const collection = database.collection("users");
        console.log(collection)
        let user = {name: req.body.name, age: req.body.age};
        collection.insertOne(user, (err, res) => {
            console.log(err)
            console.log(res)
        })
    })
    
};