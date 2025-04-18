import express from "express";
import { createTicket, getTickets } from "../controller/ticket";
const TicketRouter = express.Router();
TicketRouter.post("/create", createTicket).get("/", getTickets);
export default TicketRouter;
