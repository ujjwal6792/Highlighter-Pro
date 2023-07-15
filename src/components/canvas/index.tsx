import ShapesHandler from "../shape/index";
import { useImageStore } from "../../store/index";
const CanvasSection = () => {
  const { imageData } = useImageStore();
  return (
    <div
      id=" canvas-area"
      className="max-w-[80vw] flex justify-center items-center"
    >
      <div id="image-holder" className="relative w-[90%] select-none ">
        {imageData !== "" && <img src={imageData} alt="user image for edit" />}
        <ShapesHandler />
      </div>
    </div>
  );
};

export default CanvasSection;
