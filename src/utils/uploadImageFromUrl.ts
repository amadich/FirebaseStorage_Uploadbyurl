import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase";

export const uploadImageFromUrl = async (imageUrl: string, filename: string): Promise<string> => {
  try {
    const encodedUrl = encodeURIComponent(imageUrl);
    const response = await fetch(`/api/fetchImage?url=${encodedUrl}`);
    if (!response.ok) throw new Error('Failed to fetch image from API');
    
    const blob = await response.blob();

    // Create a reference to the Firebase Storage location
    const storageRef = ref(storage, `images/${filename}`);

    // Upload the blob to Firebase Storage
    await uploadBytes(storageRef, blob);

    // Get the download URL
    const url = await getDownloadURL(storageRef);

    return url;
  } catch (error) {
    console.error("Error uploading image from URL:", error);
    throw error;
  }
};
