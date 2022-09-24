const mongoose = require("mongoose")

const DepartmentSchema = mongoose.Schema({
 DepartmentId:{
type:Number
 },
    DepartMentCode:{
        type:String,
      
    },
    DepartmentName:{
        type:String,
      
    },

},{
timestamps:true
})
module.exports = mongoose.model("Department",DepartmentSchema)