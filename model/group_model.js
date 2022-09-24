const mongoose = require("mongoose")

const groupSchema = mongoose.Schema({
 
    GroupId:{
        type:Number,
      
    },
    GroupName:{
        type:String,
      
    },

},{
timestamps:true
})
module.exports = mongoose.model("group",groupSchema)