import express, { urlencoded }  from "express";
import { body, validationResult } from "express-validator";
import cors from "cors"

const app = express();
const PORT = 8000;

app.use(express.json())

app.use(express.urlencoded({extended: true}));

app.use(cors({origin : "http://localhost:5173"}));




//------------------------------express validator use in api -----------------------------//

// body('email').isEmail().withMessage('Not a valid e-mail address');     validator levle message;

app.post("/register", [ body("name").notEmpty(), body('password').isLength({ min: 5 }) ], (req, res) => {

    const errors = validationResult(req);
    console.log(errors.array())
    if(!errors.isEmpty()){
        return res.send({status: 400, message: "check error", errors: errors.array()})
    }

    res.send({status: 200, message: "Registeration is successfuly has done!" })
    
} )


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})