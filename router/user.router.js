const {Router}=require("express")
const {signup,usersignup,login,userlogin}=require("../controllers/user.controllers")
const verifyToken = require("../middleware/isauth")
const router=Router()

router.post("/user/signup",signup)
router.get("/user/signup",usersignup)
router.post("/user/login",login)
router.get("/user/login",userlogin)




module.exports=router