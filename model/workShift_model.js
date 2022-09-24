const mongoose = require("mongoose")

const WorkshiftSchema = mongoose.Schema({
    
    workShiftId:{
        type:Number,
    },
    ShiftId:{
        type:Number,
    },
    EmployeeId:{
        type:Number,
      
    },
    DepartmentId:{
        type:Number
         },
    Date:{
        type:String
    },
},{
timestamps:true
})
module.exports = mongoose.model("workshift",WorkshiftSchema)