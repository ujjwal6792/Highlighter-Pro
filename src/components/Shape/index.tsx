import { Rnd } from "react-rnd";
import { twMerge } from "tailwind-merge";
import { proptypes, objectSize } from "../../shapeTypes";
import { useState } from "react";
import { Circle, Rectangle, Square } from "../../assets/shapesJsx";
const ShapesHandler = (props: proptypes) => {
  const {
    type,
    text,
    textPosition,
    className,
    borderWidth,
    borderColor,
    borderRadius,
    dimension,
    fillColor,
  } = props;
  const [size, setSize] = useState<objectSize>({
    width: dimension || 200 - 10,
    height: dimension || 200 - 10,
  });

  const shapeClassName = twMerge(
    "justify-center items-center hover:border hover:border-dashed hover:border-black"
  );

  const handleResize = (
    e: MouseEvent | TouchEvent,
    a: string,
    ref: HTMLElement
  ) => {
    const width = parseInt(ref.style.width.trim().replace("px", "")) - 10;
    const height = parseInt(ref.style.height.trim().replace("px", "")) - 10;

    setSize({
      width,
      height,
    });
    [e, a];
  };
  console.log(className, borderWidth, borderColor, borderRadius, fillColor);
  return (
    <div className="">
      <Rnd
        style={{ display: "flex" }}
        className={shapeClassName}
        default={{
          x: 100,
          y: 100,
          width: dimension || 200,
          height: type === "rect" ? dimension || 150 / 1.5 : dimension || 200,
        }}
        enableResizing={{
          top: type === "rect",
          right: type === "rect",
          bottom: type === "rect",
          left: type === "rect",
          topRight: true,
          bottomRight: true,
          bottomLeft: true,
          topLeft: true,
        }}
        lockAspectRatio={type === "rect" ? false : true}
        onResize={handleResize}
      >
        {type === "square" ? (
          <Square
            height={Number(size.width) - 10}
            width={Number(size.width) - 10}
            borderColor={borderColor || ""}
            fillColor={fillColor || ""}
            borderWidth="10px"
            borderRadius="0%"
            borderStyle="dashed"
          />
        ) : type === "circle" ? (
          <Circle
            height={Number(size.height) || 200 - 10}
            width={Number(size.width) - 10}
            borderColor={borderColor || ""}
            borderWidth="10px"
            borderRadius="50%"
            borderStyle="dashed"
            fillColor={fillColor || "transparent"}
          />
        ) : (
          <Rectangle
            borderColor={borderColor || ""}
            fillColor={fillColor || ""}
          />
        )}
        <span className={textPosition}>{text}</span>
      </Rnd>
    </div>
  );
};

export default ShapesHandler;
