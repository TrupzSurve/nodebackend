const Holiday = require("../model/holiday_model")
exports.CreateHoliday = async(req,res)=>{
 try {
    const result = await Holiday.create({
        occasionId:Math.floor((Math.random()*100000)+1),
        Occasion:req.body.Occasion,
        Date:req.body.Date,
        Day:req.body.Day,
        
     })
     res.json({
        success:true,
        message: "Holiday Created Successfully",
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
exports.viewHoliday = async(req,res)=>{
    try {
        const result = await Holiday.find() 
        res.json({
            count:result.length,
            success:true,
            message:"get Holiday Details",
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
exports.deleteHolidayDetails = async(req,res)=>{
    try {
        const result = await Holiday.findOneAndDelete({occasionId:req.params.occasionId})
        res.json({
            success:true,
            message:"Delete Holiday Details",
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
exports.updateHolidayDetails = async(req,res)=>{
    try {
        const result = await Holiday.findOneAndUpdate({occasionId:req.body.occasionId} , req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update Holiday Details",
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