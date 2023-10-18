import express from "express";
import cors from "cors";

let PORT = 9000;
const app = express();

app.get("/", (req, res)=>{
  res.send("all data is here.")
})


app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})