const userSchemaValidation = (req,res,next)=>{

    const {name,email} = req.body;
    if(name == undefined || name == "" || email == undefined || email == ""){
        res.status(400).json({
            message:"Please provide name and email !!"
        })
    }
    else{
        next();
    }

}
module.exports = {
    userSchemaValidation
}