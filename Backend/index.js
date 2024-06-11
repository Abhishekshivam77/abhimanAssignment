
const express=require("express")
const app=express();


const {connection}=require("./config/db");
const  userRouter  = require("./routes/userRoutes");
const  chatRoomRouter  = require("./routes/chatroomRoutes");


require("dotenv").config()

app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Home page of this api")
})

app.use("/api",userRouter)
app.use("/api",chatRoomRouter)



//server running =>>>
app.listen(process.env.port,async()=>{
    try {
        console.log(`Server running on port no ${process.env.port}`)
    } catch (error) {

        
        console.log(" Error running server")
    }
  
})