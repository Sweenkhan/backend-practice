import mongoose from "mongoose";

const userASchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

const user =  mongoose.model("user", userASchema)

export default user