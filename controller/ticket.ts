import { Request, Response } from "express";
import { TicketModel } from "../schema/Ticket";

export const createTicket = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      travel_type,
      price,
      arrival_location,
      travel_distance,
      travel_detail,
    } = req.body;
    const { zoningID } = req.params;
    const file = req.file;

    if (!file) {
      res.status(400).json({ message: "Image file is required" });
      return;
    }

    const travel_image = file.buffer.toString("base64");

    const ticketCreated = await TicketModel.create({
      zoningID,
      travel_type,
      price,
      arrival_location,
      travel_detail,
      travel_distance,
      travel_image,
    });

    res.json({
      success: true,
      message: "Амжилттай ticket бүртгэгдлээ",
      ticket: ticketCreated,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server алдаа" });
  }
};

export const getTickets = async (req: Request, res: Response) => {
  const created = await TicketModel.find();
  res.json({ success: true, created });
};
