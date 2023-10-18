import express from "express"; 
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import user from "../models/userSchema.js";
import bcrypt from "bcrypt"; 
// import cookieParser from "cookie-parser";

config();
const router = express.Router();



router.post("/register", async(req, res) => {
  try {
    const { name, username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new user({
      name,
      username,
      password: hashedPassword,
    });

    const userSaved = await newUser.save();

    if (userSaved) {
      res.send({ status: 201, message: "Succesfully registerd user" });
    } else {
      res.send({ status: 202, message: "Registeration failed!" });
    }
  } catch {
    res.send({ status: 404, message: "Registeration failed (error)!" });
  }
});




router.post("/login",  async(req, res) => {
  const { username, password } = req.body;

  if (!username) {
    res.send({ status: 401, message: "Write your username!" });
  }

  const findUser = await user.findOne({username});

  if(findUser){
      const match = await bcrypt.compare(password, findUser.password);
    //   console.log(findUser)

    if(match) {
      const token = jwt.sign({ userName: username }, process.env.SECRET_KEY,  { expiresIn: '1h' });

      const session = ("token", token);
      //   console.log(session);

      res.cookie("token", token, { httpOnly: true, secure: true }) 

      res.send({ status: 201, message: "Succesfuly logged in!" });
    } else {
      res.send({ status: 401, message: "failed loggin!" });
    }

  } 
else {
      res.send({ status: 401, message: "Wrong username or password!" });
}

// res.send({ status: 201, message: "done!" });

});



export default router;
