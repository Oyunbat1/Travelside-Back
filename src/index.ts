import express from "express";
import cors from "cors";
import { connectDb } from "../util/connection";
import { authRouter } from "../route/auth";
import ticketRouter from "../route/ticket";
import geoInfoRouter from "../route/geoInfo";
const port = 8000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/tickets", ticketRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/info", geoInfoRouter);

app.listen(port, async () => {
  await connectDb();
  console.log("Connected to MongoDB");
  console.log(`Server is running on port ${port}`);
});
