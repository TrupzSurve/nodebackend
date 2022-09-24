const mongoose = require("mongoose")

const TravelRequestSchema = mongoose.Schema({

    TravelRequestId:{
    type:Number
 },
 EmployeeId: {
    type: String
  },
    ResonOfTravel:{
        type:String,
      
    },
    Amount:{
        type:Number,
      
    },
    Remark:{
        type:String,
      
    },
    DepartureCity:{
        type:String,
      
    },
    ArrivalCity:{
        type:String,
      
    },
    DepartureDate:{
        type:String
    },
    ReturnDate:{
        type:String
    },
    Status:{
        type:String
    }
    
},{
timestamps:true
})
module.exports = mongoose.model("TravelRequest",TravelRequestSchema)