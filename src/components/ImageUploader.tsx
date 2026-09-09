"use client";
import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";

export default function ImageUploader({ onUpload }: { onUpload: (url: string) => void }) {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <CldUploadWidget
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
      onSuccess={(result: any) => {
        const url = result.info.secure_url;
        setImageUrl(url);
        onUpload(url); // pass the URL up to your form's state
      }}
    >
      {({ open }) => (
        <button type="button" onClick={() => open()}>
          {imageUrl ? "Change Photo" : "Upload Photo"}
        </button>
      )}
    </CldUploadWidget>
  );
}