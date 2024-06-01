const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const searchRoutes = require('./routes/searchRoutes.js');
const connectDB = require('./dbcon/db.js')
dotenv.config();
const app = express();
const port = process.env.PORT || 8080;


connectDB();
app.use(express.json());

//Routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/', searchRoutes);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))