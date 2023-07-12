import React, { useState, useRef } from "react";
import Dropzone from "react-dropzone";
import { Rnd } from "react-rnd";
import Canvas from "./components/Canvas";
import ControlPanel from "./components/ControlPanel";
import { fitImageToCanvas, downloadImage } from "./utils/imageUtils";
import "./App.css";

interface ShapeData {
  type: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  style: {
    borderColor: string;
    borderWidth: number;
    fillColor: string;
    backdrop: boolean;
    transparency: boolean;
    textColor: string;
    textSize: number;
  };
  text: string;
}

function App() {
  const [image, setImage] = useState<string | null>(null);
  const [shapes, setShapes] = useState<ShapeData[]>([]);
  const [activeShape, setActiveShape] = useState<number | null>(null);
  const [borderColor, setBorderColor] = useState("#000000");
  const [borderWidth, setBorderWidth] = useState(1);
  const [fillColor, setFillColor] = useState("#FFFFFF");
  const [backdrop, setBackdrop] = useState(false);
  const [transparency, setTransparency] = useState(false);
  const [textColor, setTextColor] = useState("#000000");
  const [textSize, setTextSize] = useState(12);
  const [text, setText] = useState("");
  const canvasRef = useRef<HTMLDivElement>(null);
  const shapeRefs = useRef<Array<Rnd | null>>([]);

  const handleDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  const handleShapeClick = (index: number) => {
    setActiveShape(index);
  };

  const handleShapeDelete = (index: number) => {
    const updatedShapes = [...shapes];
    updatedShapes.splice(index, 1);
    setShapes(updatedShapes);
  };

  const handleDownload = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      if (context && image) {
        const img = new Image();
        img.src = image;

        img.onload = () => {
          const { newWidth, newHeight, offsetX, offsetY } = fitImageToCanvas(
            canvas,
            img
          );

          canvas.width = newWidth;
          canvas.height = newHeight;

          // Draw the image on the canvas
          context.drawImage(img, offsetX, offsetY, newWidth, newHeight);

          // Draw the shapes on the canvas
          shapes.forEach((shape) => {
            const { type, position, size, style, text } = shape;

            context.beginPath();

            switch (type) {
              case "rectangle":
                context.rect(position.x, position.y, size.width, size.height);
                break;
              case "arrow":
                // Draw arrow shape
                break;
              case "square":
                // Draw square shape
                break;
              case "circle":
                // Draw circle shape
                break;
              case "ellipse":
                // Draw ellipse shape
                break;
              case "rounded-rectangle":
                // Draw rounded rectangle shape
                break;
              default:
                break;
            }

            context.strokeStyle = style.borderColor;
            context.lineWidth = style.borderWidth;
            context.fillStyle = style.fillColor;

            if (style.backdrop) {
              context.shadowColor = style.borderColor;
              context.shadowBlur = 5;
            }

            if (style.transparency) {
              context.globalAlpha = 0.5;
            }

            context.fill();
            context.stroke();

            if (text) {
              context.font = `${style.textSize}px Arial`;
              context.fillStyle = style.textColor;
              context.fillText(text, position.x + 10, position.y + 30);
            }
          });

          // Download the canvas as an image file
          downloadImage(canvas);
        };
      }
    }
  };

  const handleShapeAdd = () => {
    const defaultShape: ShapeData = {
      type: "rectangle",
      position: { x: 100, y: 100 },
      size: { width: 100, height: 50 },
      style: {
        borderColor,
        borderWidth,
        fillColor,
        backdrop,
        transparency,
        textColor,
        textSize,
      },
      text,
    };

    setShapes([...shapes, defaultShape]);
  };

  const handleShapeResize = (
    index: number,
    direction: string,
    ref: Rnd | null,
    delta: { width: number; height: number },
    position: { x: number; y: number }
  ) => {
    if (ref) {
      const { width, height } = ref.style;
      const updatedShapes = [...shapes];
      updatedShapes[index].size = {
        width: parseInt(width),
        height: parseInt(height),
      };
      setShapes(updatedShapes);
    }
  };

  const handleShapeDragStart = (index: number) => {
    setActiveShape(index);
  };

  const handleShapeDragStop = () => {
    setActiveShape(null);
  };

  return (
    <div className="container bg-yellow-50 mx-auto p-4">
      <h1 className="text-2xl mb-4">Upload an image</h1>
      <div className="dropzone-container mb-8">
        <Dropzone onDrop={handleDrop}>
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className="dropzone border border-gray-300 rounded p-4"
            >
              <input {...getInputProps()} />
              <p>Drag and drop an image here, or click to select files</p>
            </div>
          )}
        </Dropzone>
      </div>

      {image ? (
        <div className="flex">
          <Canvas
            image={image}
            shapes={shapes}
            activeShape={activeShape}
            canvasRef={canvasRef}
            shapeRefs={shapeRefs}
            onShapeClick={handleShapeClick}
            onShapeDelete={handleShapeDelete}
            onShapeResize={handleShapeResize}
            onShapeDragStart={handleShapeDragStart}
            onShapeDragStop={handleShapeDragStop}
          />

          <ControlPanel
            borderColor={borderColor}
            borderWidth={borderWidth}
            fillColor={fillColor}
            backdrop={backdrop}
            transparency={transparency}
            textColor={textColor}
            textSize={textSize}
            text={text}
            onBorderColorChange={(e) => setBorderColor(e.target.value)}
            onBorderWidthChange={(e) =>
              setBorderWidth(parseInt(e.target.value))
            }
            onFillColorChange={(e) => setFillColor(e.target.value)}
            onBackdropChange={(e) => setBackdrop(e.target.checked)}
            onTransparencyChange={(e) => setTransparency(e.target.checked)}
            onTextColorChange={(e) => setTextColor(e.target.value)}
            onTextSizeChange={(e) => setTextSize(parseInt(e.target.value))}
            onTextChange={(e) => setText(e.target.value)}
            onShapeAdd={handleShapeAdd}
            onDownload={handleDownload}
          />
        </div>
      ) : null}
    </div>
  );
}

export default App;
