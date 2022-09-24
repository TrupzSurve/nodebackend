const mongoose = require("mongoose")

const ShiftSchema = mongoose.Schema({
    ShiftId:{
        type:Number
    },
 ShiftName: {
    type: String
  },
    ShiftCode:{
        type:String,
      
    },
    ShiftBeginTime:{
        type:String
    },
    ShiftEndTime:{
        type:String
    },

},{
timestamps:true
})
module.exports = mongoose.model("Shift",ShiftSchema)