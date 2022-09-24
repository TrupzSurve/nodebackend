const Shift = require("../model/Shift_model")
exports.CreateShift = async(req,res)=>{
try {
    const result = await Shift.create({
        ShiftId:Math.floor(Math.random()*10000),
        ShiftName :req.body.ShiftName,
        ShiftCode :req.body.ShiftCode,
        ShiftBeginTime :req.body.ShiftBeginTime,
        ShiftEndTime :req.body.ShiftEndTime,
      
       
    })
    res.json({
        success:true,
        message:"Create Shift Details",
        data:result,
    })
} catch (error) {
    res.json({
        success:false,
        message:"Something went worng",
        data:null,
    })
}
}
exports.GetAllShift = async(req,res)=>{
    try {
        const result = await Shift.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All Shift Details",
            data:result,
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something went worng",
            data:null,
        })
    }
    }
exports.deleteShift = async(req,res)=>{
        try {
            const result = await Shift.findOneAndDelete({ShiftId:req.params.ShiftId})
            res.json({
                success:true,
                message:"delete Shift Details",
                data:null,
            })
        } catch (error) {
            res.json({
                success:false,
                message:"Something went worng",
                data:null,
            })
        }
        }
        exports.updateShiftDetails = async(req,res)=>{
            try {
                const result = await Shift.findOneAndUpdate({ShiftId:req.body.ShiftId} , req.body , {
                    new: true,
                    runValidators: true,})
                res.json({
                    success:true,
                    message:"update Shift Details",
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
