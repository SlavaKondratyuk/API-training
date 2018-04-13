const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: {
        type: String,
        requred: true
    },
    password: {
        type: String,
        required: true
    },
    trainings: {
        name: String,
        exercises: {
            a: String,
            b: Number
        }
    }
})

module.exports = mongoose.model("Sportsmen", schema);