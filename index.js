 const express = require("express");
 const mongoose = require("mongoose");
 const app = express();
 const GameModel= require('./models/Game')

 app.use(express.json()) // allow us to recieve information from front end in json format

 const connectDB = async () => {
     try{
         await mongoose.connect("mongodb+srv://newuser:a0qGHvV42uCXJp5H@crudcluster.zu6t0.mongodb.net/game?retryWrites=true&w=majority",{
             useNewUrlParser: true,
             useUnifiedTopology:true,
         });
         console.log("mongodb connected succesfully");
     } catch(error){
         console.log("failed to connect to mongodb");
         process.exit(1);
     }  
 }  
 connectDB();
 
 app.get('/', async (req, res) =>{
     
     const game = new GameModel({game : "minesweeper", last : 200})
     try{
        await game.save()
     } catch(error) {
         console.log(error);
     }
 })

 app.listen(3001, () => {
     console.log(`server running on PORT 3001....!`)
 })