import express from "express";
import { connectDb } from "../util/connection";
import TicketRouter from "../route/ticket";
import cors from "cors";
const port = 8000;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/tickets", TicketRouter);

app.listen(port, async () => {
  await connectDb();
  console.log("Connected to MongoDB");
  console.log(`server is running on ${port}`);
});
