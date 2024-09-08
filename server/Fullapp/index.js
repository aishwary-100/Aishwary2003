import express from "express";
import connection from "./config/db.js";
import dotenv from "dotenv";
import userRouter from "./route/user.route.js";
dotenv.config();



const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use("/user",userRouter)

app.get("/", (req,res)=>{
    res.send("server is running fine")
});

app.listen(PORT, async()=>{
    try {
        await connection
        console.log(
            `Server is running on ${PORT} and db is also connected`
        )
    } catch (error) {
        console.log("Error in the server", error)
        
    }
})
