import { Request, Response, NextFunction } from "express";
import { User } from "../schema/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SALT_ROUND = 12;

export const register = async (req: Request, res: Response) => {
  try {
    const { email, username, password, confirmpassword, role } = req.body;

    if (password !== confirmpassword) {
      return res
        .status(400)
        .json({ success: false, message: "Passwords do not match" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const salt = bcrypt.genSaltSync(SALT_ROUND);
    const hashpass = bcrypt.hashSync(password, salt);

    const user = await User.create({
      email,
      username,
      password: hashpass,
      role,
    });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.ACCESS_TOKEN_SECRET_KEY || "default_secret_key",
      { expiresIn: "1h" }
    );

    return res.json({ success: true, token });
  } catch (err: any) {
    console.log(err);
    if (err.code === 11000) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect password" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.ACCESS_TOKEN_SECRET_KEY || "default_secret_key",
      { expiresIn: "1h" }
    );

    return res.json({
      success: true,
      token,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
        password: user.password,
        role: user.role,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
