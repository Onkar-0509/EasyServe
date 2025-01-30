import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Trims extra spaces
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true, // Trims extra spaces
    lowercase: true, // Ensures emails are stored in lowercase
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber:{
    type:String
  }
}, { timestamps: true }); // Adds createdAt and updatedAt fields

const User = mongoose.model("User", userSchema);

export default User;
