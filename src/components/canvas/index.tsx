import ShapesHandler from "src/components/shape/ShapesHandler";
import { useImageInfoStore, useImageStore } from "src/store";
import  { ChangeEvent } from "react";
const CanvasSection = () => {
  const { imageData } = useImageStore();
  const { updateImageInfo } = useImageInfoStore()

  const setImageInfo = (e: ChangeEvent<HTMLImageElement> )=> {
    const imageElement: HTMLImageElement  = e.target
    updateImageInfo({ width:imageElement.naturalWidth, height:imageElement.naturalHeight})
  }
  return (
    <div
      id=" canvas-area"
      className="max-w-[80vw] flex justify-center items-center"
    >
      <div id="image-holder" className="relative w-[90%] select-none ">
        {imageData !== "" && (
          <img
            onLoad={setImageInfo}
            src={imageData}
            alt="user image for edit"
          />
        )}
        <ShapesHandler />
      </div>
    </div>
  );
};

export default CanvasSection;
