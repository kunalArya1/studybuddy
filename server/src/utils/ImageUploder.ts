import { v2 as cloudinary } from "cloudinary";

interface uploadOptions {
  folder: string;
  height?: number;
  quality?: number;
  resourse_type?: "auto" | "image" | "video" | "raw" | "pdf";
}
export const uplodImage = async (
  file: { tempFilePath: string },
  folder: string,
  height?: number,
  quality?: number,
) => {
  const options: uploadOptions = { folder };
  if (height) {
    options.height = height;
  }
  if (quality) {
    options.quality;
  }
  options.resourse_type = "auto";

  return await cloudinary.uploader.upload(file.tempFilePath, options);
};
