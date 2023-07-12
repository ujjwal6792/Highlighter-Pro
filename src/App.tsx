import ShapesHandler from "./components/Shape";
import domtoimage from "dom-to-image";
import FileSaver from "file-saver";
import "./index.css";
import { BorderStyleEnum, TextPositionEnum, TypeEnum } from "./shapeTypes";
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
          type={TypeEnum.square}
          dimension={200}
          borderColor="#000000"
          borderWidth="2px"
          borderRadius="10px"
          fillColor="transparent"
          textPosition={TextPositionEnum.bottom}
          borderStyle={BorderStyleEnum.Solid}
        />
        <button onClick={downloadImage}>Download Image</button>
      </div>
    </>
  );
}

export default App;
