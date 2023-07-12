import { Rnd } from "react-rnd";
import { objectSize } from "../../shapeTypes";
import { useState } from "react";
import { Circle, Rectangle, Square } from "../../assets/shapesJsx";
import { useShapeStore } from "../../store";
const ShapesHandler = () => {
  const { shape } = useShapeStore();
  const {
    type,
    dimension,
    borderColor,
    borderWidth,
    borderRadius,
    fillColor,
    textPosition,
    borderStyle,
    text,
  } = shape;
  const [size, setSize] = useState<objectSize>({
    width: dimension || 200,
    height: dimension || 200,
  });

  const handleResize = (
    e: MouseEvent | TouchEvent,
    a: string,
    ref: HTMLElement
  ) => {
    const width = parseInt(ref.style.width.trim().replace("px", "")) - 20;
    const height = parseInt(ref.style.height.trim().replace("px", "")) - 20;

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
        className={`justify-center items-center hover:border-[1.5px] border-dashed border-black rounded-md`}
        default={{
          x: 100,
          y: 100,
          width: size.width + 20,
          height: type === "rect" ? size.height / 1.5 : size.height,
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
            height={Number(size.width)}
            width={Number(size.width)}
            borderColor={borderColor}
            fillColor={fillColor}
            borderWidth={borderWidth}
            borderRadius={borderRadius}
            borderStyle={borderStyle}
          />
        ) : type === "circle" ? (
          <Circle
            height={Number(size.height)}
            width={Number(size.width)}
            borderColor={borderColor}
            fillColor={fillColor}
            borderWidth={borderWidth}
            borderRadius={"50%"}
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
        {text !== undefined && text?.length > 0 && (
          <span className={textPosition}>{text}</span>
        )}
      </Rnd>
    </div>
  );
};

export default ShapesHandler;
