const middleware = (req,res,next) => {
    const {title,body,active,createddby,Geolocation} = req.body
    if(title && body && active && createddby,Geolocation){
        next()
    }
    else{
        res.send("All fields are required.");
    }
}
module.exports = middleware