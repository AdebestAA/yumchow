"use server";

import { v2 as cloudinary } from "cloudinary";


cloudinary.config({
  cloud_name: "ddojoiqku",
  api_key: "114969187314479",
  api_secret: process.env.CLOUDINARY_API_SECRET as string,
});

export async function uploadImage(formData: FormData) {
  "use server";

  const file = formData.get("file") as File;
  if (!file) return { error: "No file provided" };

  // Convert file to Base64 for Cloudinary
  const arrayBuffer = await file.arrayBuffer();
  const base64Image = Buffer.from(arrayBuffer).toString("base64");
  const dataURI = `data:${file.type};base64,${base64Image}`;

  try {
    const uploadResult = await cloudinary.uploader.upload(dataURI, {
      folder: "uploads",
    });

  

    return {success:true, url: uploadResult.secure_url };
  } catch (error) {
    return {success:false, url: null };
  }
}
