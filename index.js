const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.m0vup.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;




const app = express();

app.use(bodyParser.json());
app.use(cors());


const port = 5000;


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const ServiceCollection = client.db("Services").collection("Service");
    
    app.post('/addservice' ,(req , res ) => {
        const newService = req.body;
        ServiceCollection.insertOne(service)
        .then(result => {
            res.send(result.insertedCount > 0 )
        })
        console.log(newService);
    })

  
    app.get('/addservice', (req, res) => {
        reviewCollection.find({})
            .toArray(( documents) => {
                res.send(documents)
            })
    })

   
   


    app.post('/review', (req, res) => {
        const order = req.body;
        reviewCollection.insertOne(order)
            .then(result => {
                res.send(result.insertedCount > 0)
            })
    })

    
    app.get('/review', (req, res) => {
        reviewCollection.find({})
            .toArray(( documents) => {
                res.send(documents)
            })
    })

});



app.get('/', (req, res) => {
    res.send(" Server of Creative agency ")
})

app.listen(process.env.PORT || port);