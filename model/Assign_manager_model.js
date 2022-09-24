const mongoose = require("mongoose")

const AssignManagerSchema = mongoose.Schema({
    AssignManagerId:{
        type:Number
    },
 EmployeeId: {
    type: String
  },
    ReportingTo:{
        type:Number,
      
    },

},{
timestamps:true
})
module.exports = mongoose.model("AssignManager",AssignManagerSchema)