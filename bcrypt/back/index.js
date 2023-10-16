import express, { urlencoded } from "express";
import cors from "cors"
import bcrypt from "bcrypt"

let PORT = 8000
const app = express();
app.use(express.json())

app.use(urlencoded({extended: true}));

app.use(cors({origin: true}));




app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

