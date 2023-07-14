import domtoimage from "dom-to-image";
import FileSaver from "file-saver";
import ImageUploader from "./uploadimage";
import AddShape from "./addShape";
import ChangeShapeProperties from "./changeShapeProperties";

const Sidebar = () => {
  const downloadImage = (): void => {
    const imageNode: HTMLElement | null =
      document.getElementById("image-holder");
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
    <div className="relative grid gap-3 h-full min-w-[300px] max-w-[400px] w-[20vw] p-4 bg-slate-100 shadow-lg z-50">
      <ImageUploader />
      <AddShape />
     <ChangeShapeProperties/> 

      <button
        className="absolute bottom-4 right-4 px-4 py-2 rounded-lg transition-colors bg-gray-600 text-white  hover:bg-gray-800"
        onClick={downloadImage}
      >
        Download Image
      </button>
    </div>
  );
};

export default Sidebar;
