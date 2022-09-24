const EmplyeeTask = require("../model/employeeTask_model")
exports.CreateEmployeeTask = async(req,res)=>{
try {
    const result = await EmplyeeTask.create({
        TaskId:Math.floor(Math.random()*10000),
        EmployeeId :req.body.EmployeeId,
        EmployeeTask :req.body.EmployeeTask,
        Description :req.body.Description,
        DueDate :req.body.DueDate,
        Priority :req.body.Priority,
        NotifiedBefore :req.body.NotifiedBefore,
        Status :req.body.Status,
       
    })
    res.json({
        success:true,
        message:"Create EmplyeeTask Details",
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
exports.GetAllEmplyeeTask = async(req,res)=>{
    try {
        const result = await EmplyeeTask.aggregate([
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
            message:"get All EmplyeeTask Details",
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
exports.deleteEmplyeeTask = async(req,res)=>{
        try {
            const result = await EmplyeeTask.findOneAndDelete({TaskId:req.params.TaskId})
            res.json({
                success:true,
                message:"delete EmplyeeTask Details",
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
        exports.updateEmplyeeTaskDetails = async(req,res)=>{
            try {
                const result = await EmplyeeTask.findOneAndUpdate({TaskId:req.body.TaskId} , req.body , {
                    new: true,
                    runValidators: true,})
                res.json({
                    success:true,
                    message:"update EmplyeeTask Details",
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
