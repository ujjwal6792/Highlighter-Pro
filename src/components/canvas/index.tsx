import ShapesHandler from "../shape";
import { useImageStore } from "../../store";
const CanvasSection = () => {
  const { imageData } = useImageStore();
  return (
    <div
      id=" canvas-area"
      className="max-w-[80vw] flex justify-center items-center"
    >
      <div id="image-holder" className="relative w-[90%]">
        {imageData !== "" && <img src={imageData} alt="user image for edit" />}
        <ShapesHandler />
      </div>
    </div>
  );
};

export default CanvasSection;
