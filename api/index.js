const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const app = express();
const port = 3002;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const  jwt = require('jsonwebtoken');

mongoose.connect("mongodb://newdatabase:3is8oOXYMxN1WRQPoxwdOOii4FQzEt4a5WrdiKvHrrpTJY2JCMDd9ULuZoIxKPafq2dbqfQlmjLPACDblpdg7A==@newdatabase.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@newdatabase@", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to database!");
}).catch((err) => {
    console.log("Connection failed!");
    console.log(err);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);