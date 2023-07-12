import { Rnd } from "react-rnd";
import { twMerge } from "tailwind-merge";
enum textPosition {
  top = "top",
  bottom = "bottom",
  left = "left",
  right = "right",
  topRight = "top-right",
  topLeft = "top-left",
  bottomRight = "bottom-right",
  bottomLeft = "bottom-left",
}
enum type {
  rect,
  circle,
  square,
  arrow,
  triangle,
}
interface proptypes {
  type: type;
  text: string;
  textPosition: textPosition;
  className: string;
  borderWidth: number;
  borderColor: string;
  borderRadius: number;
  width: number;
  height: number;
  fillColor: string;
}

const ShapesHandler = (props: proptypes) => {
  const {
    type,
    text,
    textPosition,
    className,
    borderWidth,
    borderColor,
    borderRadius,
    width,
    height,
    fillColor,
  } = props;

  const shapeClassName = twMerge(
    "justify-center items-center border border-black",
    ""
  );

  return (
    <Rnd
      style={{ display: "flex" }}
      className={shapeClassName}
      default={{
        x: 100,
        y: 100,
        width: width || 320,
        height: height || 200,
      }}
    >
      <span className={textPosition}>{text}</span>
    </Rnd>
  );
};

export default ShapesHandler;
