const group = require("../model/group_model")
exports.CreateGroup = async(req,res)=>{
try {
    const result = await group.create(req.body)
    res.json({
        success:true,
        message:"Create Group Details",
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
exports.GetAllGroup = async(req,res)=>{
    try {
        const result = await group.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All Group Details",
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
exports.deleteGroupbyGroupId = async(req,res)=>{
        try {
            const result = await group.findOneAndDelete({GruopId:req.params.GruopId})
            res.json({
                success:true,
                message:"delete Group Details",
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
        exports.updategroupDetails = async(req,res)=>{
            try {
                const result = await group.findOneAndUpdate({GroupId:req.body.GroupId} , req.body , {
                    new: true,
                    runValidators: true,})
                res.json({
                    success:true,
                    message:"update Gruop Details",
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
