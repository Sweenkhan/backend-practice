import express, { urlencoded } from "express";
import cors from "cors";
import userRouter from "./controller/userRouter.js"; 
import connection from "./db/connection.js"; 
import cookieParser from "cookie-parser";


let PORT = 8000;
const app = express();


app.use(express.json());
app.use(urlencoded({extended: true}));
app.use(cookieParser())
app.use(cors({origin: "http://localhost:5173"}))


app.use(userRouter)


app.get("/", (req, res)=>{
  res.send("all data is here.")
})




connection
.then(() => {
    app.listen(PORT, ()=>{
        console.log(`server is running on port ${PORT}`)
    })
}).catch(() => {
    console.log("connection failed")
})
 