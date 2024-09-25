const {userModel} = require("../models/userModel");
const bcrypt=require("bcrypt");
require("dotenv").config();
// const fs=require("fs");
const fs = require('fs').promises;
const path=require("path");
const jwt=require("jsonwebtoken");
const { v4: uuidv4 } = require('uuid');
const { insertFileintoFirebase } = require("../firebase/insertFile");
const DeleteFileFromFirebase = require("../firebase/deleteFile");

const register = async (req, res) => { 
   try{
    const{name,email,password,password2}=req.body;
    const newEmail=email.toLowerCase();
    const isEmailExist=await userModel.findOne({email:newEmail});
    if(isEmailExist){   
        return res.status(422).json({error:"Email already Exist"});
}
if(password!=password2){
    return res.status(422).json({error:"password not match"});
}
const hasPassword=bcrypt.hashSync(password,10);
const newUser = await userModel.create({
    name,
    email:newEmail,
    password:hasPassword
});
return  res.status(200).json({message:"user created successfully"});
   }catch(error)
   {

    console.error("Error in registration:", error);  // Log the error for debugging purposes
    return res.status(500).json({ error: "User registration failed." });
   }



 }
 const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(422).json({error:"All Fields are Required"})
        }
        const newEmail = email.toLowerCase();
        const isuser = await userModel.findOne({ email: newEmail });
        // console.log(isuser);
        if(!isuser){
            return res.status(422).json({error:"Invalid credentials"})
        };

        const isPasswordCorrect = bcrypt.compareSync(password,isuser.password);

        if(!isPasswordCorrect){
            return res.status(422).json({error:"Invalid credentials"})
        };
        const jwtkey = process.env.JWTKEY;
        const token = jwt.sign({id:isuser._id, name:isuser.name}, jwtkey, {expiresIn:'1d'})
        return res.status(200).json({token, id:isuser._id, name:isuser.name});
    } catch (error) {
        console.log(error);
        return res.status(422).json({error:"User Login Failed."})
    }
}

const getUser = async (req, res) => { 
try{
    const{id}=req.params;

    const user= await userModel.findById(id).select('-password');
    if(!user){
      res.status(422).json({error:"user not found"});
    }
     res.status(200).send(user);

}catch(error)
{

 res.send(error);
 return res.status(422).json({error:"internal server error."});
}

}
const getAuthors = async (req, res) => { 
    try{
    
        const author= await userModel.find().select('-password');
        if(!author){
          res.status(422).json({error:"Author not found"});
        }
         res.status(200).send(author);
    
    }catch(error)
    {
    
     res.send(error);
     return res.status(422).json({error:"internal server error."});
    }
 }

const changeAvatar = async (req, res) => { 
try{
    //  console.log(req.user);
    // console.log(req.files);
    if(!req.files || !req.files.avtar){
       
        return res.status(422).json({error:"Please choose a valid file "});
    }
    //finde user from Database
    const user= await userModel.findById(req.user.id);
  
    // delete user avtar if already exist
  if(user.avtar)
    {
        const deletedFile= DeleteFileFromFirebase(user.avtar);
        if(!deletedFile){
            console.log("avtar not deleted")
        }

    }
    

    // if(user.avtar){
    //     console.log("avtar exist")
    //     await  fs.unlink(path.join(__dirname, '..', 'uploads', user.avtar), (error)=>{
    //         if(error){
    //             return res.status(422).json(error)
    //         }
    //     })
    // };



    const {avtar}= req.files;
    if(avtar.size >500000)
    {
        return res.status(422).json({error:"file size is too large. it should be less than 50kb"});
    
    }
//Rename avtar name
     let fileName;
     fileName=avtar.name;
     let splittedFileName=fileName.split('.');
let newFileName=splittedFileName[0] + uuidv4() + '.' + splittedFileName[splittedFileName.length-1];
const metaData={
    contentType:avtar.mimetype
            }
const avtarUrl= await  insertFileintoFirebase(newFileName,avtar.data,metaData);
const updatedAvtar= await userModel.findByIdAndUpdate(req.user.id,{
        avtar:avtarUrl}, {new:true} ).select("-password");
        if(!updatedAvtar){
            return res.status(422).json({error:"Dear Avtar could not be changed"});
        }
     return res.status(200).json({message:"Avtar changed successfully",avtar:updatedAvtar});

        
// avtar.mv(path.join(__dirname,'..','uploads',newFileName), async (error)=>{
// if(error){
//     console.log(error);
//     return res.status(422).json({error:"Avtar could be chnaged"});
// };
// const updatedAvtar= await userModel.findByIdAndUpdate(req.user.id,{
//     avtar:newFileName}, {new:true} ).select("-password");
//     if(!updatedAvtar){
//         return res.status(422).json({error:"Dear Avtar could not be changed"});
//     }
//     return res.status(200).json({message:"Avtar changed successfully",avtar:updatedAvtar});

// } )

}catch(error){
    console.log(error);
    return res.status(422).json({error:"internal server error."});
}

 }

const editUser = async (req,res)=>{
    const {name,email,currentPassword,newPassword,confirmNewPassword}=req.body;
try{
    if(!name || !email || !currentPassword || !newPassword || !confirmNewPassword)
{
    return res.status(422).json({error:"Please fill all the fields."});
}
const user=await userModel.findById(req.user.id);
if(!user){
    return res.status(422).json({error:"User not found."});
}
//make sure new email is not already existed in database
const emailExist=await userModel.findOne({email:email});
if(emailExist && (emailExist._id!=req.user.id))
{
    return res.status(422).json({error:"Email already exist."});
}
const  validateUserPassword=bcrypt.compareSync(currentPassword,user.password);
if(!validateUserPassword){
    return res.status(422).json({error:"Invalid Current Password"});
    
}
if (newPassword!=confirmNewPassword){
    return res.status(422).json({error:"New Password and Confirm New Password do not match."});
}

const hasPassword=bcrypt.hashSync(newPassword,10);
const updatedUser=await userModel.findByIdAndUpdate(req.user.id,{
    name:name,
    email:email,
    password:hasPassword
},
{new:true
});
return res.status(200).json(updatedUser);

}catch(error){
    console.log(error);
    return res.status(422).json({error:"internal server error."});
}
}

module.exports = {
    register,
    login,
    getUser,
    changeAvatar,
    getAuthors,
    editUser
}