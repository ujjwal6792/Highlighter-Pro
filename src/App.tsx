import ShapesHandler from "./components/Shape";
import domtoimage from "dom-to-image";
import FileSaver from "file-saver";
import "./index.css";
import { useShapeStore } from "./store";
function App() {
const { updateShape } = useShapeStore()
  const downloadImage = (): void => {
    const imageNode: HTMLElement | null = document.getElementById("app");
    if (imageNode) {
      domtoimage
        .toBlob(imageNode)
        .then((imageBlob: Blob | null) => {
          if (imageBlob) {
            FileSaver.saveAs(imageBlob, "highligher-pro");
          } else {
            console.error("Failed to convert image to blob.");
          }
        })
        .catch((error) => {
          console.error("Failed to download image:", error);
        });
    }
  };

  return (
    <>
      <div
        id="app"
        className="h-screen w-screen bg-yellow-50 overflow-hidden overscroll-none"
      >
        <ShapesHandler/>
        <button onClick={downloadImage}>Download Image</button>
      </div>
    </>
  );
}

export default App;
