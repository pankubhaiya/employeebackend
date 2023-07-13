const mongoose = require("mongoose")

const emplSchema = mongoose.Schema({
    FirstName: {
        type: String,
        required: true,
    },
    LastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    Department:{
        type: String,
        required: true,
    },
    Salary:{
        type: Number,
        required: true,
    },



}, {
    versionKey: false
})

const emplmodel = mongoose.model("empl", emplSchema)

module.exports = { emplmodel }