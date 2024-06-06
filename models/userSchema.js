import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
    minLength: [3, "First Name Must be Contains at least 3 Character"],
  },

  lastName: {
    type: String,
    require: true,
    minLength: [3, "Last Name Must be Contains at least 3 Character"],
  },

  email: {
    type: String,
    required: true,
    validator: [validator.isEmail, "Please provide a valid Email !"],
  },

  phone: {
    type: String,
    require: true,
    minLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
    maxLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
  },

  eaadhaar: {
    type: String,
    required: [true, "Eaadhaar Is Required!"],
    minLength: [12, "Eaadhaar Must Contain Only 10 Digits!"],
    maxLength: [12, "Eaadhaar Must Contain Only 10 Digits!"],
  },

  dob: {
    type: Date,
    required: [true, "DOB Is Required!"],
  },

  gender: {
    type: String,
    required: [true, "Gender Is Required!"],
    enum: ["Male", "Female"],
  },

  password: {
    type: String,
    required: true,
    select: false,
  },

  role: {
    type: String,
    required: true,
    enum: ["Admin", "Patient", "Doctor"],
  },

  doctorDepartment: {
    type: String,
  },

  docAvatar: {
    public_id: String,
    url: String,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateJsonWebToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

export const User = mongoose.model("User", userSchema);
