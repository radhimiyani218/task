
const blog = require("../models/blog.schema");
const user = require("../models/user.schema");

const home = (req, res) => {
  res.render("home");
};
const addblog = (req, res) => {
  res.render("addblog");
};
const content = async (req, res) => {
  try {
    const data = await blog.find();
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
};

const add = async (req, res) => {
  const { id } = req.cookies;
  let userdata = await user.findById(id);
  const { title, body, active ,Geolocation,createdby} = req.body;
  const adblog = {
    title: title,
    body: body,
    createdby:createdby,
    active: active,
    Geolocation:Geolocation,
  };
  try {
    const data = await blog.create(adblog);
    return res.cookie("blogId", data.id).send(`blog created by ${data.createdby}`);
  } catch (error) {
    return res.send(error.message);
  }
};
const deleted = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id", id);
    const data = await blog.findByIdAndDelete(id);
    if (data) {
      const data = await blog.find();
      res.send(data);
    } else {
      res.send("blog is not availble");
    }
  } catch (error) {
    return res.send(error.message);
  }
};
const edit = async (req, res) => {
  const { id } = req.params;
  // console.log("id",id);
  try {
    let data = await blog.findByIdAndUpdate(id,req.body);
    // console.log("data",data);
    if (data) {
      console.log(data);
      res.send("sucessfully upadte");
    } else {
      res.send("blog is not availble");
    }
  } catch (error) {
    return res.send(error.message);
  }
};



module.exports = {
  home,
  addblog,
  content,
  add,
  deleted,
  edit,
  
};
