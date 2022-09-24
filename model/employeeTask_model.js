const mongoose = require("mongoose")

const EmployeeTaskSchema = mongoose.Schema({

 TaskId:{
    type:Number
 },
 EmployeeId: {
    type: String
  },
    EmployeeTask:{
        type:String,
      
    },
    Description:{
        type:String,
      
    },
    DueDate:{
        type:String,
      
    },
    Priority:{
        type:String,
      
    },
    NotifiedBefore:{
        type:String,
      
    },
    Status:{
        type:String,
      
    },

},{
timestamps:true
})
module.exports = mongoose.model("EmployeeTask",EmployeeTaskSchema)