import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema({
  zoningID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "zoningCategory",
    required: true,
  },
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
  travel_distance: {
    type: String,
    required: true,
  },
  travel_detail: {
    type: String,
    required: true,
  },
  travel_image: {
    type: String,
    required: true,
  },
});

export const TicketModel = mongoose.model("Ticket", TicketSchema);
