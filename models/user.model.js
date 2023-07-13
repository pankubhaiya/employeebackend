const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  
    email:{
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },

},{
    versionKey:false
})

const usermodel = mongoose.model("user",userSchema)

module.exports={usermodel}