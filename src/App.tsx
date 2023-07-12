import ShapesHandler from "./components/Shape";
import domtoimage from "dom-to-image";
import FileSaver from "file-saver";
import "./index.css";
function App() {
  const downloadImage = async () => {
    const imageNode: HTMLElement = document.getElementById("app")!;
    const imageBlob = await domtoimage.toBlob(imageNode)!;
    FileSaver.saveAs(imageBlob, "highligher-pro");
  };
  return (
    <>
      <div
        id="app"
        className="h-screen w-screen bg-yellow-50 overflow-hidden overscroll-none"
      >
        <ShapesHandler />
        <button onClick={downloadImage}>Download Image</button>
      </div>
    </>
  );
}

export default App;
