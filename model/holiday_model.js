const mongoose = require("mongoose")

const HolidaySchema = mongoose.Schema({
    occasionId:{
        type:Number,
      
    },
    Occasion:{
        type:String,
      
    },
    Date:{
        type:String,
      
    },
    Day:{
        type:String,
      
    },
},{
timestamps:true
})
module.exports = mongoose.model("Holiday",HolidaySchema)