const TrainingSchedule = require("../model/TrainingSchedule_model")
exports.CreateTrainingSchedule = async(req,res)=>{
try {
    const result = await TrainingSchedule.create({
        TravelScheduleId:Math.floor(Math.random()*10000),
        EmployeeId :req.body.EmployeeId,
        TrainingSchedule :req.body.TrainingSchedule,
        Title :req.body.Title,
        Date :req.body.Date,
        Day :req.body.Day,
        StartTime :req.body.StartTime,
        EndTime :req.body.EndTime,
        Description :req.body.Description,
        Status :req.body.Status,
       
    })
    res.json({
        success:true,
        message:"Create TrainingSchedule Details",
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
exports.GetAllTrainingSchedule = async(req,res)=>{
    try {
        const result = await TrainingSchedule.aggregate([
            {
$lookup:{
    from:"employees",
    localField:"EmployeeId",
    foreignField:"EmployeeId",
    as:"Employee"
}
            }
        ]) 
        res.json({
            count:result.length,
            success:true,
            message:"get All TrainingSchedule Details",
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
exports.deleteTrainingSchedule = async(req,res)=>{
        try {
            const result = await TrainingSchedule.findOneAndDelete({TravelScheduleId:req.params.TravelScheduleId})
            res.json({
                success:true,
                message:"delete TrainingSchedule Details",
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
        exports.updateTrainingScheduleDetails = async(req,res)=>{
            try {
                const result = await TrainingSchedule.findOneAndUpdate({TravelScheduleId:req.body.TravelScheduleId} , req.body , {
                    new: true,
                    runValidators: true,})
                res.json({
                    success:true,
                    message:"update TrainingSchedule Details",
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
