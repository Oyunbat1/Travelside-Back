import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema({
  travel_type: {
    type: String,
    enum: ["автобус", "онгоц", "галт тэрэг"],
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  arrival_location: {
    type: String,
    required: true,
  },
});

export const TicketModel = mongoose.model("Ticket", TicketSchema);
