import mongoose from "mongoose";
const customerRegistrationSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  travelName: {
    type: String,
    required: true,
  },
  FavoriteTravelName: {
    type: String,
    required: true,
  },
});
export const customerRegistration = mongoose.model(
  "CustomerRegistration",
  customerRegistrationSchema
);
