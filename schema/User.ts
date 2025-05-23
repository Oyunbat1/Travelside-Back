import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["ADMIN", "USER"],
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", UserSchema);
