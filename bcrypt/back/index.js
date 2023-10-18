import express, { urlencoded } from "express";
import cors from "cors"
import bcrypt from "bcrypt"

let PORT = 8000
const app = express();
app.use(express.json())

app.use(urlencoded({extended: true}));

app.use(cors({origin: "http://localhost:5173"}));

let data = {
    name:"",
    username: "",
    password: ""
}


app.post("/register", async(req, res) => {

    let {name, username, password} = req.body;

    console.log(username)

    let hashedPassword = await bcrypt.hash(password, 10)

    data.name= name,
    data.username = username
    data.password = hashedPassword

    res.send("everything is fine")
})


app.post("/login", async(req, res) => {

    const {username, password} = req.body;

    const checkPassword = await bcrypt.compare(password, data.password)


    if(checkPassword){
        console.log("password is matched")
        res.send("password is matched")
    } else {

        res.send("password is not matched")
    }
})


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

