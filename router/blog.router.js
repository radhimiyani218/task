const {Router}=require("express")
const {home, addblog, content, add, singleblog,deleted, edit,search,comment, like}=require("../controlers/blog.controlers")

const role=require("../middleware/role")
const author=require("../middleware/author")
const user=require("../middleware/user")
const {blog}=Router()
    

blog.get("/blog/",home)
blog.get("/blog/create",role,addblog)
blog.get('/blog/blogs',content)
blog.post("/blog/create",author,add)
blog.delete('/blog/delete/:id',deleted)
blog.patch("/blog/edit/:id",role,edit)


module.exports={blog}