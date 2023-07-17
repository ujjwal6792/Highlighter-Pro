import React from "react";
import { useDropzone } from "react-dropzone";
import { useImageNameStore, useImageStore } from "src/store";

const ImageUploader: React.FC = () => {
  const { setImageData } = useImageStore();
  const {setName} = useImageNameStore()
  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        if(typeof file.name === 'string'){
          setName('highlighted-'+file.name);
        }
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
      className={`px-4 py-2 min-h-[200px] flex flex-col justify-center items-center cursor-pointer rounded-md border border-slate-700 bg-white ${
        isDragActive ? "active" : ""
      }`}
    >
      <input {...getInputProps()}  />
      {isDragActive ? (
        <p className="text-lg text-center">Drop the image here...</p>
      ) : (
        <p className="text-lg text-center">Drag and drop an image here, or click to select an image</p>
      )}
    </div>
  );
};

export default ImageUploader;
