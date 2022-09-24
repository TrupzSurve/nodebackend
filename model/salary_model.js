const mongoose = require("mongoose")

const salarySchema = mongoose.Schema({
    salarySipId:{
        type:Number,
    },
    EmployeeId:{
        type:String,
      
    },
    Designation:{
        type:String,
      
    },
    BasicPay:{
        type:Number,
      
    },
    HouseRentAllowance:{
        type:Number,
      
    },
    SpecialAllowance:{
        type:Number
    },
   
    ConveyanceAllowance:{
        type:Number
    },
    MedicalAllowance:{
        type:Number
    },
  

},{
timestamps:true
})
module.exports = mongoose.model("salary",salarySchema)