import domtoimage from "dom-to-image";
import FileSaver from "file-saver";
import ImageUploader from "src/components/sidebar/uploadimage";
import AddShape from "src/components/sidebar/addShape";
import ChangeShapeProperties from "src/components/sidebar/changeShapeProperties";
import { useImageNameStore, useImageStore } from "src/store";

const Sidebar = () => {
  const { name, setName } = useImageNameStore();
  const { imageData, setImageData } = useImageStore();
  const downloadImage = (): void => {
    const imageNode: HTMLElement | null =
      document.getElementById("image-holder");
    if (imageNode) {
      domtoimage
        .toBlob(imageNode)
        .then((imageBlob: Blob | null) => {
          if (imageBlob) {
            FileSaver.saveAs(imageBlob, name+'.png');
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
    <div className="relative flex flex-col gap-6 h-full min-w-[300px] max-w-[400px] w-[20vw] p-4 bg-gray-500 shadow-lg z-50">
      <ImageUploader />
      <AddShape />
      <ChangeShapeProperties />
      <div className="absolute bottom-4 left-0 right-0 flex flex-col p-4 gap-4 items-end">
        <input
          className="w-full text-lg px-2 py-1 rounded-md"
          disabled={name.length === 0}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="flex gap-4">
          <button
            className={`px-4 py-2 rounded-md w-max transition-colors bg-gray-600 text-white  hover:bg-gray-800 ${
              imageData === "" ? "opacity-50" : "opacity-100"
            }`}
            disabled={imageData === ""}
            onClick={() => {
              setImageData("");
              setName("");
            }}
          >
            Clear Image
          </button>
          <button
            className=" px-4 py-2 rounded-md w-max transition-colors bg-gray-600 text-white  hover:bg-gray-800"
            onClick={downloadImage}
          >
            Download Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
