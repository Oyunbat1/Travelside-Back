import { Request, Response } from "express";
import { TicketModel } from "../schema/Ticket";

export const createTicket = async (req: Request, res: Response) => {
  try {
    const { travel_type, price, arrival_location } = req.body;
    const ticketCreated = await TicketModel.create({
      travel_type,
      price,
      arrival_location,
    });
    res.json({
      success: true,
      message: "Amjilttai ticket burtgegdlee",
      ticket: ticketCreated,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server aldaa" });
  }
};

export const getTickets = async (req: Request, res: Response) => {
  const created = await TicketModel.find();
  res.json({ success: true, created });
};
