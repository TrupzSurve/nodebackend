const organization = require("../model/organization_model")
exports.createorganization = async(req,res)=>{
 try {
    const result = await organization.create({
        organizationId:Math.floor((Math.random()*100000)+1),
        Name:req.body.Name,
        Email:req.body.Email,
        Phone:req.body.Phone,
        About:req.body.About,
     })
     res.json({
        success:true,
        message: "organization Created Successfully",
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
exports.vieworganization = async(req,res)=>{
    try {
        const result = await organization.find() 
        res.json({
            count:result.length,
            success:true,
            message:"get organization Details",
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
exports.deleteorganizationDetails = async(req,res)=>{
    try {
        const result = await organization.findOneAndDelete({organizationId:req.params.organizationId})
        res.json({
            success:true,
            message:"Delete organization Details",
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
exports.updateorganizationDetails = async(req,res)=>{
    try {
        const result = await organization.findOneAndUpdate({organizationId:req.body.organizationId} , req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update organization Details",
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