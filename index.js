const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express()
const port = process.env.PORT || 4455

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))