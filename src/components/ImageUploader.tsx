"use client";
import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";

export default function ImageUploader({ onUpload }: { onUpload: (url: string) => void }) {
  const [imageUrl, setImageUrl] = useState("");
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset) {
    return (
      <div className="rounded-md border border-dashed border-border bg-muted/30 p-4 text-sm text-muted-foreground">
        Image uploads are not configured. Add the Cloudinary cloud name and upload preset to enable uploads.
      </div>
    );
  }

  return (
    <CldUploadWidget
      uploadPreset={uploadPreset}
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
