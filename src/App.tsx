import ShapesHandler from "./components/Shape";
import domtoimage from "dom-to-image";
import FileSaver from "file-saver";
import "./index.css";
import { textPositionEnum, typeEnum } from "./shapeTypes";
function App() {
  const downloadImage = async (): Promise<void> => {
    const imageNode: HTMLElement | null = document.getElementById("app");
    if (imageNode) {
      const imageBlob: Blob | null = await domtoimage.toBlob(imageNode);
      if (imageBlob) {
        FileSaver.saveAs(imageBlob, "highligher-pro");
      }
    }
  };
  return (
    <>
      <div
        id="app"
        className="h-screen w-screen bg-yellow-50 overflow-hidden overscroll-none"
      >
        <ShapesHandler
          type={typeEnum.square}
          borderColor="#000000"
          borderWidth={2}
          borderRadius={5}
          fillColor="transparent"
          textPosition={textPositionEnum.top}
        />
        <button onClick={downloadImage}>Download Image</button>
      </div>
    </>
  );
}

export default App;
