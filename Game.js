const mongoose = require("mongoose")

const gameSchema = new mongoose.Schema({
    game : {
        type : String,
        required : true,
    },

    last : {
        type : Number,
        required : true,
    }

})

const Game = mongoose.model("games",gameSchema);

module.exports = Game;