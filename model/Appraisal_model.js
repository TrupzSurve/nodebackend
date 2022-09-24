const mongoose = require("mongoose")

const AppraisalSchema = mongoose.Schema({

    AppraisalId:{
    type:Number
 },
 EmployeeId: {
    type: String
  },
    EfficiencyEmpolyee:{
        type:String,
      
    },
    Timelines:{
        type:String,
      
    },
    Quality:{
        type:String,
      
    },
    Accuracy:{
        type:String,
      
    },
    Remark:{
        type:String,
      
    },
},{
timestamps:true
})
module.exports = mongoose.model("Appraisal",AppraisalSchema)