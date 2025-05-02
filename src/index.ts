import express from "express";
import cors from "cors";
import { connectDb } from "../util/connection";
import { authRouter } from "../route/auth";
import ticketRouter from "../route/ticket";
import geoInfoRouter from "../route/geoInfo";
import customerRegistrationRouter from "../route/customerRegistration";
import zoningRouter from "../route/zoning";
const port = 8001;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/tickets", ticketRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/info", geoInfoRouter);
app.use("/api/v1/customerRegistration", customerRegistrationRouter);
app.use("/api/v1/zoning", zoningRouter);

app.listen(port, async () => {
  await connectDb();
  console.log("Connected to MongoDB");
  console.log(`Server is running on port ${port}`);
});
