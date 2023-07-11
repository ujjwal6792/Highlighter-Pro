import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Rnd, RndDragCallback, RndResizeCallback } from "react-rnd";
import "./App.css";

interface Shape {
  type: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  style: {
    borderColor: string;
    fillColor: string;
    backdrop: boolean;
    transparency: boolean;
  };
  text: string;
}

function App() {
  const [image, setImage] = useState<string | null>(null);
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [activeShape, setActiveShape] = useState<number | null>(null);
  const [shapeType, setShapeType] = useState<string>("rectangle");
  const [borderColor, setBorderColor] = useState<string>("#000000");
  const [fillColor, setFillColor] = useState<string>("#000000");
  const [backdrop, setBackdrop] = useState<boolean>(false);
  const [transparency, setTransparency] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

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
    // Logic to download the modified image as PNG or WebP
  };

  const handleBorderColorChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBorderColor(event.target.value);
  };

  const handleFillColorChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFillColor(event.target.value);
  };

  const handleBackdropChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBackdrop(event.target.checked);
  };

  const handleTransparencyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTransparency(event.target.checked);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleShapeTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShapeType(event.target.value);
  };

  const handleShapeResize: RndResizeCallback = (
    e,
    direction,
    ref,
    delta,
    position
  ) => {
    if (
      typeof ref.style.width === "string" &&
      typeof ref.style.height === "string"
    ) {
      const width = parseInt(ref.style.width);
      const height = parseInt(ref.style.height);
      const updatedShapes = [...shapes];
      updatedShapes[index].size = { width, height };
      setShapes(updatedShapes);
    }
  };

  const handleShapeDrag: RndDragCallback = (e, d) => {
    const updatedShapes = [...shapes];
    updatedShapes[index].position = { x: d.x, y: d.y };
    setShapes(updatedShapes);
  };

  const handleCanvasClick = () => {
    setActiveShape(null);
  };

  const handleShapeAdd = (event: React.FormEvent) => {
    event.preventDefault();
    setShapes([
      ...shapes,
      {
        type: shapeType,
        position: { x: 0, y: 0 },
        size: { width: 100, height: 100 },
        style: {
          borderColor,
          fillColor,
          backdrop,
          transparency,
        },
        text,
      },
    ]);
    setText("");
  };

  const renderShape = (shape: Shape, index: number) => {
    const { type, position, size, style, text } = shape;

    let shapeClassName = "";
    switch (type) {
      case "rectangle":
        shapeClassName = "shape-rectangle";
        break;
      case "arrow":
        shapeClassName = "shape-arrow";
        break;
      case "square":
        shapeClassName = "shape-square";
        break;
      case "circle":
        shapeClassName = "shape-circle";
        break;
      case "ellipse":
        shapeClassName = "shape-ellipse";
        break;
      case "rounded-rectangle":
        shapeClassName = "shape-rounded-rectangle";
        break;
      default:
        shapeClassName = "";
    }

    return (
      <Rnd
        key={index}
        size={{ width: size.width, height: size.height }}
        position={{ x: position.x, y: position.y }}
        onResize={handleShapeResize}
        onDragStop={handleShapeDrag}
        bounds="parent"
        className={`shape ${shapeClassName} ${
          activeShape === index ? "active" : ""
        }`}
      >
        <div
          className="shape-content"
          style={{
            borderColor: style.borderColor,
            backgroundColor: style.fillColor,
            backdropFilter: style.backdrop ? "blur(5px)" : "none",
            opacity: style.transparency ? "0.5" : "1",
          }}
          onClick={() => handleShapeClick(index)}
        >
          {text && <p className="shape-text">{text}</p>}
        </div>
        <div className="shape-delete" onClick={() => handleShapeDelete(index)}>
          X
        </div>
      </Rnd>
    );
  };

  return (
    <div className="container mx-auto p-4">
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

      {image && (
        <div>
          <h2 className="text-2xl mb-4">Modify the image</h2>
          <div className="options mb-8">
            <label className="mr-4">
              Shape Type:{" "}
              <select
                value={shapeType}
                onChange={handleShapeTypeChange}
                className="border border-gray-300 rounded px-2 py-1"
              >
                <option value="rectangle">Rectangle</option>
                <option value="arrow">Arrow</option>
                <option value="square">Square</option>
                <option value="circle">Circle</option>
                <option value="ellipse">Ellipse</option>
                <option value="rounded-rectangle">Rounded Rectangle</option>
              </select>
            </label>
            <label className="mr-4">
              Border Color:{" "}
              <input
                type="text"
                value={borderColor}
                onChange={handleBorderColorChange}
                className="border border-gray-300 rounded px-2 py-1"
              />
            </label>
            <label>
              Fill Color:{" "}
              <input
                type="text"
                value={fillColor}
                onChange={handleFillColorChange}
                className="border border-gray-300 rounded px-2 py-1"
              />
            </label>
            <label className="mr-4">
              Backdrop:{" "}
              <input
                type="checkbox"
                checked={backdrop}
                onChange={handleBackdropChange}
              />
            </label>
            <label>
              Transparency:{" "}
              <input
                type="checkbox"
                checked={transparency}
                onChange={handleTransparencyChange}
              />
            </label>
            <br />
            <label className="mt-4">
              Text:{" "}
              <input
                type="text"
                value={text}
                onChange={handleTextChange}
                className="border border-gray-300 rounded px-2 py-1"
              />
            </label>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded mt-4"
              onClick={handleShapeAdd}
            >
              Add Shape
            </button>
          </div>

          <div className="canvas" onClick={handleCanvasClick}>
            <img src={image} alt="Uploaded Screenshot" />
            {shapes.map(renderShape)}
          </div>

          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded mt-4"
            onClick={handleDownload}
          >
            Download
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
