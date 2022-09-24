const Event = require("../model/Event_model")
exports.CreateEventDetails = async(req,res)=>{
 try {
    const result = await Event.create({
        EventId:Math.floor((Math.random()*100000)+1),
        Title:req.body.Title,
        EventDescription:req.body.EventDescription,
        EventDate:req.body.EventDate,
        EventStartTime:req.body.EventStartTime,
        EventEndTime:req.body.EventEndTime,
        EventPostedBy:req.body.EventPostedBy,
        EventLocation:req.body.EventLocation,
        EventArrangeFor:req.body.EventArrangeFor,
        
     })
     res.json({
        success:true,
        message: "Event Created Successfully",
        data:result
     })
 } catch (error) {
    res.json({
        success:false,
        message: `Something went worng `+ {error},
        data:null
     })
 }
}
exports.ViewEvent = async(req,res)=>{
    try {
        const result = await Event.find() 
        res.json({
            count:result.length,
            success:true,
            message:"get Event Details",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message: `Something went worng `+ {error},
            data:null
         })
    }
}
exports.deleteEventDetails = async(req,res)=>{
    try {
        const result = await Event.findOneAndDelete({EventId:req.params.EventId})
        res.json({
            success:true,
            message:"Delete Event Details",
            data:null
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong",
            data:null
        })  
    }
}
exports.updateEventDetails = async(req,res)=>{
    try {
        const result = await Event.findOneAndUpdate({EventId:req.body.EventId} , req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update Event Details",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong"+Error,
            data:null
        })  
    }
}