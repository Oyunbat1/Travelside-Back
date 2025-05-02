import express from "express";
import {
  createZoningCategory,
  getZoningCategoryWithProvinces,
  getZoningCategory,
} from "../controller/zoningCategory";
const zoningRouter = express.Router();
zoningRouter
  .post("/create", createZoningCategory)
  .get("/withProvinces", getZoningCategoryWithProvinces)
  .get("/get", getZoningCategory);

export default zoningRouter;
