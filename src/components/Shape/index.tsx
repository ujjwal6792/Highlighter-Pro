import { Rnd } from "react-rnd";
import { twMerge } from "tailwind-merge";
import { proptypes, objectSize } from "../../shapeTypes";
import { useState } from "react";
import { Rectangle, Square } from "../../assets/ShapesSvg";
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
          height: dimension || 200,
        }}
        enableResizing={{
          top: false,
          right: false,
          bottom: false,
          left: false,
          topRight: true,
          bottomRight: true,
          bottomLeft: true,
          topLeft: true,
        }}
        lockAspectRatio={true}
        onResize={handleResize}
      >
        {type === "square" ? (
          <Square
            size={Number(size.height) || 200 - 10}
            borderColor="#000"
            fillColor="transparent"
          />
        ) : (
          <Rectangle
            borderColor="#000"
            fillColor="transparent"
            height={Number(size.height) || 200 - 10}
            width={Number(size.width) - 10}
          />
        )}
        <span className={textPosition}>{text}</span>
      </Rnd>
    </div>
  );
};

export default ShapesHandler;
