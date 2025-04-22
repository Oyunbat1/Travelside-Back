import mongoose from "mongoose";

const GeoInfoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const GeoInfo = mongoose.model("GeoInfo", GeoInfoSchema);
