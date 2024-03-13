const user = require("../models/user.schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/isauth");

//  signup
const signup = async (req, res) => {
  let data = await user.findOne({ email: req.body.email });
  if (data) {
    return res.send({ message: "already exists" });
  } else {
    let { username, email, password, role } = req.body;
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        res.send({ message: "valid" });
      } else {
        let obj = {
          username: username,
          password: hash,
          email: email,
          role: role,
        };
        let data = await user.create(obj);
        res.send({ message: "valid", val: data });
      }
    });
  }
};
const usersignup = (req, res) => {
  res.render("signup");
};

// login
const login = async (req, res) => {
  const { email, password } = req.body;
  let data = await user.findOne({ email });
  if (data) {
    bcrypt.compare(password, data.password, (err, result) => {
      if (result) {
        let token = jwt.sign({ id: data._id, role: data.role }, "token");
        res.cookie("token", token).send({ msg: "User login successfully" });
      } else {
        res.send({ msg: "Password incorrect" });
      }
    });
  } else {
    res.send({ msg: "User not found" });
  }
};

const userlogin = (req, res) => {
  res.render("login");
};





module.exports = {
  signup,
  login,
  userlogin,
  usersignup,
};
