import ShapesHandler from "./components/Shape";
import domtoimage from "dom-to-image";
import FileSaver from "file-saver";
import "./index.css";
import { typeEnum } from "./shapeTypes";
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
        <ShapesHandler type={typeEnum.square} />
        <button onClick={downloadImage}>Download Image</button>
      </div>
    </>
  );
}

export default App;
