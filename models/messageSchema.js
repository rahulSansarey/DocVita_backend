import mongoose from "mongoose";

import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName:{
        type: String,
        require: true,
        minLength: [3,"First Name Must be Contains at least 3 Character"]
    },

    lastName:{
        type: String,
        require: true,
        minLength: [3,"Last Name Must be Contains at least 3 Character"]
    },

    email:{
        type: String,
        required: true,
        validator: [validator.isEmail, "Please provide a valid Email !"]
    },
    firstName:{
        type: String,
        require: true,
        minLength: [3,"First Name Must be Contains at least 3 Character"]
    },
    phone:{
        type: String,
        require: true,
        minLength: [10,"Phone Number Must Contain Exact 10 Digits!"],
        maxLength: [10,"Phone Number Must Contain Exact 10 Digits!"],
    },

    message:{
        type: String,
        require: true,
        minLength: [11,"Message Must Contains At least 10 Characters "],
        
    },
})

export const Message = mongoose.model("Message",messageSchema);