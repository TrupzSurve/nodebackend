const mongoose = require("mongoose")

const organizationSchema = mongoose.Schema({
    organizationId:{
        type:Number
    },
    Name:{
        type:String,
      
    },
    Email:{
        type:String,
      
    },
    Phone:{
        type:Number
    },
    About:{
        type:String,
      
    },
  
   

},{
timestamps:true
})
module.exports = mongoose.model("organization",organizationSchema)