import mongoose from "mongoose";
import { Mongoose } from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
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

  appointment_date: {
    type: String,
    required: true,
  },

  department: {
    type: String,
    required: true,
  },

  doctor: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },

  hasVisited: {
    type: Boolean,
    default: false,
  },

  address: {
    type: String,
    required: true,
  },
  doctorId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },

  patientId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },

  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",
  },
});

  export const Appointment = mongoose.model("Appointment", appointmentSchema);