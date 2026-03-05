const express = require('express');
const { dbConnection } = require('./config/db');
const dotenv = require('dotenv');
const categoryRouter = require('./routes/category.route');
const productRouter = require('./routes/product.route');
const uploadRouter = require('./routes/upload.route');
const upload = require('./middleware/upload.middleware');

//dotenv config
dotenv.config();
const app = express();

//middleware
app.use(express.json());
app.use('/api/category', categoryRouter);
app.use('/api/product',productRouter);
app.use('/api/upload', upload.single('file'), uploadRouter);

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