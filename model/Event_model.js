const mongoose = require("mongoose")

const EventSchema = mongoose.Schema({
    EventId:{
        type:Number,
      
    },
    Title:{
        type:String,
      
    },
    EventDescription:{
        type:String,
      
    },
    EventDate:{
        type:String,
      
    },
    EventStartTime:{
        type:String,
    },
    EventEndTime:{
        type:String,
    },
    EventPostedBy:{
        type:String
    },
    EventLocation:{
        type:String
    },
    EventArrangeFor:{
        type:String
    },

},{
timestamps:true
})
module.exports = mongoose.model("Event",EventSchema)