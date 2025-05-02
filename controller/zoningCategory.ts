import { request, Request, Response } from "express";
import { ZoningCategoryModel } from "../schema/Zoning";

// Бүсчлэл
export const createZoningCategory = async (req: Request, res: Response) => {
  try {
    const { zoneName } = req.body;
    const newZoningCategory = new ZoningCategoryModel({ zoneName });
    await newZoningCategory.save();
    res.status(201).json(newZoningCategory);
  } catch (error) {
    res.status(500).json({ message: "Error creating zoning category", error });
  }
};
// Бүсчлэл маань бусад аймгуудтай хамт
export const getZoningCategoryWithProvinces = async (
  req: Request,
  res: Response
) => {
  try {
    const zoningCategories = await ZoningCategoryModel.aggregate([
      {
        $lookup: {
          from: "tickets",
          localField: "_id",
          foreignField: "zoningID",
          as: "tickets",
        },
      },
      {
        $project: {
          zoneName: 1,
          tickets: {
            _id: 1,
            travel_type: 1,
            price: 1,
            arrival_location: 1,
            travel_image: 1,
            travel_distance: 1,
            travel_detail: 1,
          },
        },
      },
    ]);

    res.json({ success: true, zoningCategories });
  } catch (error) {
    res.status(500).json({
      message: "Error getting zoning category with provinces",
      error,
    });
  }
};

export const getZoningCategory = async (req: Request, res: Response) => {
  try {
    const zoningCategories = await ZoningCategoryModel.find();
    res.json({ success: true, zoningCategories });
  } catch (error) {
    res
      .status(404)
      .json({ message: "Error getting zoning category with provinces", error });
  }
};
