import mongoose from "mongoose";

const ZoningCategorySchema = new mongoose.Schema(
  {
    zoneName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const ZoningCategoryModel = mongoose.model(
  "zoningCategory",
  ZoningCategorySchema
);
