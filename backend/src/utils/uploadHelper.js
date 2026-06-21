import cloudinary from "../config/cloudinary.js";

export const uploadImage =
  async (file) => {
    try {
      const result =
        await cloudinary.uploader.upload(
          file
        );

      return result.secure_url;
    } catch (error) {
      throw new Error(
        "Image upload failed"
      );
    }
  };
