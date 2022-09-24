const mongoose = require("mongoose")

const leaveSchema = mongoose.Schema({
    leaveId:{
        type:Number,
    },
    EmployeeId:{
        type:Number,
      
    },
    leaveType:{
        type:String,
      
    },
    FormDate:{
        type:String,
      
    },
    ToDate:{
        type:Number
    },
   
    PostingDate:{
        type:String
    },
    ApporveByHR:{
        type:Boolean
    },
    AdminStatus:{
        type:Boolean
    }

},{
timestamps:true
})
module.exports = mongoose.model("leave",leaveSchema)