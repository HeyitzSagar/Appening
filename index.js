const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./dbcon/db.js')

dotenv.config();

const app = express()
const port = process.env.PORT || 8080
connectDB();
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))