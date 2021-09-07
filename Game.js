const express = require('express')
const connectDB = require('./config/db')
const Product = require('./models/Product')

connectDB()
const app = express();
app.use(express.json());

app.get('/',async(req,res) =>{
    const product= new Product({name : "car" ,price : "120000"})

    try {
        await product.save()
    } catch (err) {
        console.log(err);
    }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`server running on port ${PORT}`));

