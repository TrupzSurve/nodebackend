const Appraisal = require("../model/Appraisal_model")
exports.CreateAppraisal = async(req,res)=>{
try {
    const result = await Appraisal.create({
        AppraisalId:Math.floor(Math.random()*10000),
        EmployeeId :req.body.EmployeeId,
        EfficiencyEmpolyee :req.body.EfficiencyEmpolyee,
        Timelines :req.body.Timelines,
        Quality :req.body.Quality,
        Accuracy :req.body.Accuracy,
        Remark :req.body.Remark,
       
    })
    res.json({
        success:true,
        message:"Create Appraisal Details",
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
exports.GetAllAppraisal = async(req,res)=>{
    try {
        const result = await Appraisal.aggregate([
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
            message:"get All Appraisal Details",
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
exports.deleteAppraisal = async(req,res)=>{
        try {
            const result = await Appraisal.findOneAndDelete({AppraisalId:req.params.AppraisalId})
            res.json({
                success:true,
                message:"delete Appraisal Details",
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
        exports.updateAppraisalDetails = async(req,res)=>{
            try {
                const result = await Appraisal.findOneAndUpdate({AppraisalId:req.body.AppraisalId} , req.body , {
                    new: true,
                    runValidators: true,})
                res.json({
                    success:true,
                    message:"update Appraisal Details",
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
