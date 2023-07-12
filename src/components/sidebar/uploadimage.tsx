import React from "react";
import { useDropzone } from "react-dropzone";
import { useImageStore } from "../../store";

const ImageUploader: React.FC = () => {
  const { setImageData } = useImageStore();
  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImageData(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={`px-4 py-2 m-4 cursor-pointer rounded-md border border-slate-700 ${
        isDragActive ? "active" : ""
      }`}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the image here...</p>
      ) : (
        <p>Drag and drop an image here, or click to select an image</p>
      )}
    </div>
  );
};

export default ImageUploader;
