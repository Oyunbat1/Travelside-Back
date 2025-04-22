import express from "express";
import { createGeoInfo, getGeoInfo } from "../controller/geoInfo";
const geoInfoRouter = express.Router();
geoInfoRouter.post("/create", createGeoInfo).get("/get", getGeoInfo);
export default geoInfoRouter;
