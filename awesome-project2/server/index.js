const express = require('express');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

const { Readable } = require('stream');
const app = express();

let db;
MongoClient.connect('mongodb://localhost/trackDB', (err, database) => {
  if (err) {
    console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
    process.exit(1);
  }
  db = database;
});

//app.use(express.static('dist'));
app.get('/api/test', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});

app.get('/api/file', (req, res) => {
  res.set('content-type', 'audio/mp3');
  res.set('accept-ranges', 'bytes');
});


app.listen(8080, () => console.log('Listening on port 8080!'));
