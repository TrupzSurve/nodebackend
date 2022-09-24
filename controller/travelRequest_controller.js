const TravelRequest = require("../model/travelRequest_model")
exports.CreateTravelRequest = async(req,res)=>{
try {
    const result = await TravelRequest.create({
        TravelRequestId:Math.floor(Math.random()*10000),
        EmployeeId :req.body.EmployeeId,
        ResonOfTravel :req.body.ResonOfTravel,
        Amount :req.body.Amount,
        DepartureCity :req.body.DepartureCity,
        ArrivalCity :req.body.ArrivalCity,
        Remark :req.body.Remark,
        DepartureDate :req.body.DepartureDate,
        ReturnDate :req.body.ReturnDate,
        Status :req.body.Status,
       
    })
    res.json({
        success:true,
        message:"Create TravelRequest Details",
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
exports.GetAllTravelRequest = async(req,res)=>{
    try {
        const result = await TravelRequest.aggregate([
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
exports.deleteTravelRequest = async(req,res)=>{
        try {
            const result = await TravelRequest.findOneAndDelete({TravelRequestId:req.params.TravelRequestId})
            res.json({
                success:true,
                message:"delete TravelRequest Details",
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
        exports.updateTravelRequestDetails = async(req,res)=>{
            try {
                const result = await TravelRequest.findOneAndUpdate({TravelRequestId:req.body.TravelRequestId} , req.body , {
                    new: true,
                    runValidators: true,})
                res.json({
                    success:true,
                    message:"update TravelRequest Details",
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
