const mongoose = require("mongoose")

const employeeSchema = mongoose.Schema({
    EmployeeId:{
        type:Number,
      
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
    DepartMent:{
        type:String
    },
    Status:{
        type:Boolean
    }

},{
timestamps:true
})
module.exports = mongoose.model("employee",employeeSchema)