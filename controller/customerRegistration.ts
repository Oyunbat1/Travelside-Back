import { Request, Response } from "express";
import { customerRegistration } from "../schema/CustomerRegistation";
export const createCustomerRegistration = async (
  req: Request,
  res: Response
) => {
  try {
    const { username, email, phoneNumber, travelName, FavoriteTravelName } =
      req.body;
    const customerReg = await customerRegistration.create({
      username,
      email,
      phoneNumber,
      travelName,
      FavoriteTravelName,
    });
    res.json({ success: true, info: customerReg });
  } catch (err) {
    console.log(err);
  }
};
