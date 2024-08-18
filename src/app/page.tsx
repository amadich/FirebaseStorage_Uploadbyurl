import Dashboard from "@/components/Dashboard";
import UploadFromUrl from "@/components/UploadFromUrl";
import UploadImage from "@/components/UploadImage";

export default function Home() {
  return (
    <>
      <h1 className="text-center text-3xl text-green-600"> Welcome To My Next Auth Application ! </h1>
      <Dashboard />
      <h2>Upload Image</h2>
      <UploadImage />
      <UploadFromUrl />
    </>
  )
}
