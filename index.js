let express = require('express');
let app = express();
let dotenv = require('dotenv');
dotenv.config()
let port = process.env.PORT || 7800;
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let MongoUrl = process.env.LiveMongo;
let cors = require('cors')
let bodyParser = require('body-parser')
let db;


app.get('/', (req, res) => {
        res.send('hii from express')
    })
    //user details
app.get('/user', (req, res) => {
    db.collection('user').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

//admin details
app.get('/admin', (req, res) => {
        db.collection('admin').find().toArray((err, result) => {
            if (err) throw err;
            res.send(result)
        })
    })
    //movies details
app.get('/movies', (req, res) => {
    db.collection('movies').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

//payment details
app.get('/payment', (req, res) => {
    db.collection('payment').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

//subscriber details
app.get('/subscriber', (req, res) => {
    db.collection('subscriber').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

//SubscriptionDetail details
app.get('/SubscriptionDetail', (req, res) => {
    db.collection('SubscriptionDetail').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

//Web_Series details
app.get('/Web_Series', (req, res) => {
    db.collection('Web_Series').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})



//connection with db
MongoClient.connect(MongoUrl, (err, client) => {
    if (err) console.log('error while connection');
    db = client.db('netflixproject');
    app.listen(port, () => {
        console.log(`server ${port}`)
    })
})