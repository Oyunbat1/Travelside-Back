import { Request, Response } from "express";
import { GeoInfo } from "../schema/GeoInfo";

export const createGeoInfo = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const geoInfoCreated = await GeoInfo.create({
      title,
      content,
    });
    res.json({
      success: true,
      message: "Амжиллтай газарзүйн мэдээлэл нэмлээ.",
      info: geoInfoCreated,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server aldaa" });
  }
};
export const getGeoInfo = async (req: Request, res: Response) => {
  const created = await GeoInfo.find();
  res.json({ success: true, created });
};
