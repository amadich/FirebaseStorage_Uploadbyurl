"use client";
// components/UploadImage.tsx
import { useState, ChangeEvent } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase";

const UploadImage = () => {
  // Use appropriate type for the file input
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");

  // Type for the event is ChangeEvent<HTMLInputElement>
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const storageRef = ref(storage, `images/${selectedFile.name}`);
    try {
      await uploadBytes(storageRef, selectedFile);
      const url = await getDownloadURL(storageRef);
      setImageUrl(url);
      alert("Upload successful!");
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} className=" bg-green-500 p-2 ml-2 ">Upload</button>
      {imageUrl && <img src={imageUrl} alt="Uploaded image" style={{ marginTop: 20, maxWidth: "100%", height: "auto" }} />}
    </div>
  );
};

export default UploadImage;
