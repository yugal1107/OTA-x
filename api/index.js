import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import {UserModel} from "./models/User.js";
import cors from "cors";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import bcrypt from "bcryptjs";

const app = express();
const port = 4040;
const bcryptSalt = bcrypt.genSaltSync(10);

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });

const jwtSecret = process.env.JWT_SECRET;

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.get("/test", (req,res)=>{
    res.json("test ok");
})

app.get('/profile', (req,res)=>{
  const token = req.cookies?.token;
  if(token){
      jwt.verify(token, jwtSecret, {}, (err, userData)=>{
        if (err) {
          console.error('JWT verification error:', err);
          return res.status(401).json("Invalid token");
        }
          res.json(userData);
      });
  }else{
      res.status(401).json("no token")
  }
})

app.post("/login/user", async (req,res)=>{
  try{
    const {username, password, role} = req.body;
    const foundUser = await UserModel.findOne({ username, role });

    if (!foundUser) {
      return res.status(404).json({ error: "User not found" });
    }

    const passOK = await bcrypt.compare(password, foundUser.password);
    if (!passOK) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    jwt.sign({userId:foundUser._id, username, role: foundUser.role}, jwtSecret, {}, (err,token)=>{
      if (err) throw err;
        res.cookie("token", token, {sameSite:"none", secure:true}).status(201).json({
          id: foundUser._id,
          role: foundUser.role,
        })
      }); 
  }
  catch(err){
    console.error("Login error:", err);
    next(err);
  }
})

app.post("/login/admin", async (req,res)=>{
  try{
    const {username, password, role} = req.body;
    const foundUser = await UserModel.findOne({ username, role });

    if (!foundUser) {
      return res.status(404).json({ error: "User not found" });
    }

    const passOK = await bcrypt.compare(password, foundUser.password);
    if (!passOK) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    console.log('Input Password:', password);
    console.log('Stored Password Hash:', foundUser.password);
    console.log('Password Comparison Result:', passOK);

    jwt.sign({userId:foundUser._id, username, role: foundUser.role}, jwtSecret, {}, (err,token)=>{
      if (err) throw err;
        res.cookie("token", token, {sameSite:"none", secure:true}).status(201).json({
          id: foundUser._id,
          role: foundUser.role,
        })
      }); 
  }
  catch(err){
    console.error("Login error:", err);
    next(err);
  }
})

app.post("/register/user", async(req,res)=>{
  try{
    const {username, password, role} = req.body;
    console.log(req.body);
    // Check if the user already exists
    const existingUser = await UserModel.findOne({ username, role });

    if (existingUser) {
      // User is already registered
      return res.status(400).json({ error: "User already registered. Try logging in." });
    }

      const hashedPassword = bcrypt.hashSync(password, bcryptSalt);
      
      const createUser = await UserModel.create({
          username: username, 
          password: hashedPassword,
          role: role || 'user',
      });

      jwt.sign({userId:createUser._id, username, role: createUser.role}, jwtSecret, {}, (err,token)=>{
          if (err) throw err;
          res.cookie("token",token, {sameSite: "none", secure:true}).status(201).json({
              id: createUser._id,
              role: createUser.role,
          });
      })
  }catch(err){
    console.error("Error during registration:", err);
    res.status(500).json({ error: "Internal server error. Please try again later." });
  }
})

app.post("/register/admin", async(req,res)=>{  
  try{
    const {username, password, role} = req.body;
    console.log(req.body);
    // Check if the user already exists
    const existingUser = await UserModel.findOne({ username, role });

    if (existingUser) {
      // User is already registered
      return res.status(400).json({ error: "User already registered. Try logging in." });
    }

      const hashedPassword = bcrypt.hashSync(password, bcryptSalt);
      
      const createUser = await UserModel.create({
          username: username, 
          password: hashedPassword,
          role: role || 'user',
      });

      jwt.sign({userId:createUser._id, username, role: createUser.role}, jwtSecret, {}, (err,token)=>{
          if (err) throw err;
          res.cookie("token",token, {sameSite: "none", secure:true}).status(201).json({
              id: createUser._id,
              role: createUser.role,
          });
      })
  }catch(err){
    console.error("Error during registration:", err);
    res.status(500).json({ error: "Internal server error. Please try again later." });
  }
})

app.listen(port, ()=>{
    console.log(`Listening on the port ${port}`);
})s