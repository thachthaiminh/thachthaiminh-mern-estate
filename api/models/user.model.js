import mongoose from "mongoose";

const userSchema = new Schema(
  {
    username: {
      typeof: String,
      required: true,
      unique: true,
    },
    email: {
      typeof: String,
      required: true,
      unique: true,
    },
    passworrd: {
      typeof: String,
      required: true,
    },
  },
  { timestamp: true }
);

const User = mongoose.model("User", userSchema);

export default User;
