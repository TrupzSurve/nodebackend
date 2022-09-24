const admin = require("../model/admin_model")
exports.getAdmin = async(req,res)=>{
try {
    const result = await admin.find()
res.json({
    count:result.length,
    success:true,
    message:"get Admin Details",
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
