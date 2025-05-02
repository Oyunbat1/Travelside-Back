// route/ticket.ts
import express from "express";
import { createTicket, getTickets } from "../controller/ticket";
import multer from "multer";

const ticketRouter = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

ticketRouter
  .post("/create/:zoningID", upload.single("travel_image"), createTicket)
  .get("/get", getTickets);

export default ticketRouter;
