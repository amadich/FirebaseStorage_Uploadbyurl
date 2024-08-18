"use client";
import { useState, ChangeEvent } from "react";
import { uploadImageFromUrl } from "@/utils/uploadImageFromUrl";

const UploadFromUrl = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string>("");

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
  };

  const handleUpload = async () => {
    if (!imageUrl) return;

    try {
      // Generate a filename from the URL
      const filename = imageUrl.split('/').pop() || 'uploaded_image';

      // Upload the image and get the new URL
      const uploadedUrl = await uploadImageFromUrl(imageUrl, filename);
      setUploadedImageUrl(uploadedUrl);
      alert("Upload successful!");
    } catch (error) {
      alert("Error uploading image.");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter image URL"
        value={imageUrl}
        onChange={handleUrlChange}
      />
      <button onClick={handleUpload}>Upload Image</button>
      {uploadedImageUrl && <img src={uploadedImageUrl} alt="Uploaded image" style={{ marginTop: 20, maxWidth: "100%", height: "auto" }} />}
    </div>
  );
};

export default UploadFromUrl;
