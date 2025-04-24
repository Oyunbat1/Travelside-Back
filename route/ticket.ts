import express from "express";
import { createTicket, getTickets } from "../controller/ticket";
const ticketRouter = express.Router();
ticketRouter.post("/create", createTicket).get("/get", getTickets);
export default ticketRouter;
