const express = require('express');
const { dbConnection } = require('./config/db');
const dotenv = require('dotenv');
const categoryRouter = require('./routes/category.route');

const upload = require('./middleware/upload.middleware');

const cors = require('cors');


//dotenv config
dotenv.config();
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use('/api/category', categoryRouter);


app.get('/',(req, res) => {
    res.send("Home page")
})

//connection database
dbConnection();
app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 8000;


const port = process.env.PORT;
app.listen(port, () => {
    console.log('server running...');
    console.log(`http://localhost:${port}`);
})