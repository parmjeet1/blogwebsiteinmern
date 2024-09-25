const express=require("express");
const upload=require("express-fileupload");
require('dotenv').config();
const cors=require("cors");
const { userRouter } = require("./routers/userRouter");
const dbConnect = require("./config/dbConfig");
const app=express();
app.use(express.json());
app.use(upload());
app.use("/uploads",express.static(__dirname+'/uploads'));// location where user avatar stored.
const {postRouter}= require("./routers/postRouter");

app.use(cors({origin:`http://localhost:3000`}));
 app.use('/api/users',userRouter);
 

 app.use("/api/posts",postRouter);

app.get("/",(req,res)=>{
    res.send("hello world");
})
const port=process.env.PORT;
app.listen(port,()=>
    {
        dbConnect();
    console.log(`server is running on port ${port}`);
})
