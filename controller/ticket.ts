import { Request, Response } from "express";
import { TicketModel } from "../schema/Ticket";

// controller/ticket.ts
export const createTicket = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { travel_type, price, arrival_location } = req.body;
    const file = req.file;

    if (!file) {
      res.status(400).json({ message: "Image file is required" });
      return;
    }

    // Convert buffer to base64
    const travel_image = file.buffer.toString("base64");

    const ticketCreated = await TicketModel.create({
      travel_type,
      price,
      arrival_location,
      travel_image,
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
