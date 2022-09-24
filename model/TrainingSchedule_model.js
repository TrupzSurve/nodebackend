const mongoose = require("mongoose")

const TravelScheduleSchema = mongoose.Schema({

    TravelScheduleId:{
    type:Number
 },
 EmployeeId: {
    type: String
  },
    TrainingSchedule:{
        type:String,
      
    },
    Title:{
        type:String,
      
    },
    Date:{
        type:String,
      
    },
    Day:{
        type:String,
      
    },
    StartTime:{
        type:String,
      
    },
    EndTime:{
        type:String
    },
    Description:{
        type:String
    },
    Status:{
        type:String
    }
    
},{
timestamps:true
})
module.exports = mongoose.model("TravelSchedule",TravelScheduleSchema)