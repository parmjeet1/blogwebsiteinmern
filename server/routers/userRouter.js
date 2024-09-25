const express=require('express');
const { register,login, getUser, getAuthors, changeAvatar, editUser } = require('../controllers/userControllers');
const userValidation = require('../middlewares/uerValidation');
const { authMiddleware } = require('../middlewares/authMiddleware');
const userRouter=express.Router();
 
userRouter.post('/register', register);
userRouter.post("/login", login);
userRouter.get("/:id", getUser);
userRouter.get("/", getAuthors);

userRouter.post("/changeavatar",authMiddleware, changeAvatar);

userRouter.patch('/edit-user', authMiddleware, editUser);



module.exports={userRouter};