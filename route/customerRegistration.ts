import express from "express";
import { createCustomerRegistration } from "../controller/customerRegistration";
const customerRegistrationRouter = express.Router();
customerRegistrationRouter.post("/create", createCustomerRegistration);
export default customerRegistrationRouter;
