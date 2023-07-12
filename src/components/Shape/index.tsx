import { Rnd } from "react-rnd";
import { twMerge } from "tailwind-merge";
import { objectSize } from "../../shapeTypes";
import { useState } from "react";
import { Circle, Rectangle, Square } from "../../assets/shapesJsx";
import { useShapeStore } from "../../store";
const ShapesHandler = () => {
  const {  type,
    dimension,
    borderColor,
    borderWidth,
    borderRadius,
    fillColor,
    textPosition,
    borderStyle,
    text} = useShapeStore()
  const [size, setSize] = useState<objectSize>({
    width: dimension || 200,
    height: dimension || 200 ,
  });

  const shapeClassName = twMerge(
    "justify-center items-center hover:border hover:border-dashed hover:border-black"
  );

  const handleResize = (
    e: MouseEvent | TouchEvent,
    a: string,
    ref: HTMLElement
  ) => {
    const width = parseInt(ref.style.width.trim().replace("px", "")) ;
    const height = parseInt(ref.style.height.trim().replace("px", "")) ;

    setSize({
      width,
      height,
    });
    [e, a];
  };

  return (
    <div className="">
      <Rnd
        style={{ display: "flex" }}
        className={shapeClassName}
        default={{
          x: 100,
          y: 100,
          width: size.width + 20 || 200,
          height: type === "rect" ? size.width || 150 / 1.5 : size.height || 200,
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
            height={Number(size.width) }
            width={Number(size.width) }
            borderColor={borderColor}
            fillColor={fillColor}
            borderWidth={borderWidth}
            borderRadius={borderRadius}
            borderStyle={borderStyle}
          />
        ) : type === "circle" ? (
          <Circle
            height={Number(size.height) }
            width={Number(size.width) }
            borderColor={borderColor}
            fillColor={fillColor}
            borderWidth={borderWidth}
            borderRadius={borderRadius}
            borderStyle={borderStyle}
          />
        ) : (
          <Rectangle
            borderColor={borderColor}
            fillColor={fillColor}
            borderWidth={borderWidth}
            borderRadius={borderRadius}
            borderStyle={borderStyle}
          />
        )}
        {text !== undefined && text?.length>0 && <span className={textPosition}>{text}</span>}
      </Rnd>
    </div>
  );
};

export default ShapesHandler;
