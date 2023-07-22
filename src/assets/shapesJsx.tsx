import React from "react";

interface ShapeProps {
  width?: number;
  height?: number;
  fillColor?: string;
  borderWidth?: string;
  borderColor?: string;
  borderRadius?: string;
  borderStyle?: string;
}

const Rectangle: React.FC<ShapeProps> = ({
  fillColor = "transparent",
  borderWidth = "2",
  borderColor = "black",
  borderRadius = "0",
  borderStyle = "solid",
}) => {
  const rectangleStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: fillColor,
    borderWidth: borderWidth + "px",
    borderColor: borderColor,
    borderRadius: borderRadius + "px",
    borderStyle: borderStyle,
  };

  return <div style={rectangleStyle}></div>;
};

const Circle: React.FC<ShapeProps> = ({
  fillColor = "transparent",
  borderWidth = "2",
  borderColor = "black",
  borderStyle = "solid",
}) => {
  const circleStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: fillColor,
    borderWidth: borderWidth + "px",
    borderColor: borderColor,
    borderRadius: "50%",
    borderStyle: borderStyle,
  };

  return <div style={circleStyle}></div>;
};

const Triangle: React.FC<ShapeProps> = ({
  fillColor = "",
  borderColor = "black",
  borderWidth = 0,
}) => {
  const sidesWidth = 30,
    height = 90;

  const triangleStyle = {
    width: 0,
    height: 0,
    top: "50%",
    left: "50%",
    transform: `translate(-50%, ${1.25 * Number(borderWidth)}px )`, // Center the fill-div inside the border-div
    backgroundColor: "transparent",
    borderRight: `${
      sidesWidth + 0.125 * Number(borderWidth)
    }px solid transparent `,
    borderLeft: `${
      sidesWidth + 0.125 * Number(borderWidth)
    }px solid transparent`,
    borderBottom: `${height}px solid ${fillColor}`,
    zIndex: 10,
  };

  const triangleBorderStyle = {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderRight: `${sidesWidth + Number(borderWidth)}px solid transparent `,
    borderLeft: `${sidesWidth + Number(borderWidth)}px solid transparent`,
    borderBottom: `${height + 2 * Number(borderWidth)}px solid ${borderColor}`,
    zIndex: 5,
    clipPath: `polygon(0% 100%, 50% 0%, 100% 100%)`,
  };

  return (
    <div
      id="border-div"
      style={{ position: "absolute", ...triangleBorderStyle }}
    >
      <div
        id="fill-div"
        style={{ position: "absolute", ...triangleStyle }}
      ></div>
    </div>
  );
};

const Line: React.FC<ShapeProps> = ({
  fillColor = "transparent",
  borderWidth = "2px",
  borderColor = "black",
  borderRadius = "0",
  borderStyle = "solid",
}) => {
  const lineStyle = {
    width: "100%",
    height: borderWidth,
    backgroundColor: fillColor,
    borderWidth: "0",
    borderColor: borderColor,
    borderRadius: borderRadius,
    borderStyle: borderStyle,
  };

  return <div style={lineStyle}></div>;
};

const SingleArrowLine: React.FC<ShapeProps> = ({
  fillColor = "transparent",
  borderWidth = "2px",
  borderColor = "black",
  borderRadius = "0",
  borderStyle = "solid",
}) => {
  const arrowLineStyle = {
    width: "90%",
    height: borderWidth,
    backgroundColor: fillColor,
    borderWidth: borderWidth + "px",
    borderColor: borderColor,
    borderRadius: borderRadius + "px",
    borderStyle: borderStyle,
  };

  const arrowStyle = {
    top: "50%",
    left: 0,
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderTop: `${(4 * Number(borderWidth)).toString()}px solid transparent `,
    borderBottom: `${(4 * Number(borderWidth)).toString()}px solid transparent`,
    borderRight: `${(
      4 * Number(borderWidth)
    ).toString()}px solid  ${borderColor}`,
  };

  return (
    <div className="relative" style={arrowLineStyle}>
      <div
        className="absolute -translate-y-1/2 -translate-x-1/2 "
        style={arrowStyle}
      ></div>
    </div>
  );
};

const DoubleArrowLine: React.FC<ShapeProps> = ({
  fillColor = "transparent",
  borderWidth = "2px",
  borderColor = "black",
  borderRadius = "0",
  borderStyle = "solid",
}) => {
  const arrowLineStyle = {
    width: "90%",
    height: borderWidth,
    backgroundColor: fillColor,
    borderWidth: borderWidth + "px",
    borderColor: borderColor,
    borderRadius: borderRadius + "px",
    borderStyle: borderStyle,
  };

  const arrowStyle = {
    top: "50%",
    left: 0,
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderTop: `${(4 * Number(borderWidth)).toString()}px solid transparent `,
    borderBottom: `${(4 * Number(borderWidth)).toString()}px solid transparent`,
    borderRight: `${(
      4 * Number(borderWidth)
    ).toString()}px solid  ${borderColor}`,
  };

  const secondArrowStyle = {
    top: "50%",
    right: 0,
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderTop: `${(4 * Number(borderWidth)).toString()}px solid transparent `,
    borderBottom: `${(4 * Number(borderWidth)).toString()}px solid transparent`,
    borderLeft: `${(
      4 * Number(borderWidth)
    ).toString()}px solid  ${borderColor}`,
  };

  return (
    <div style={arrowLineStyle}>
      <div style={arrowStyle}></div>
      <div style={secondArrowStyle}></div>
    </div>
  );
};

const Ellipse: React.FC<ShapeProps> = ({
  fillColor = "transparent",
  borderWidth = "2px",
  borderColor = "black",
  borderRadius = "50%",
  borderStyle = "solid",
}) => {
  const ellipseStyle = {
    width: "20px",
    height: "10px",
    backgroundColor: fillColor,
    borderWidth: borderWidth,
    borderColor: borderColor,
    borderRadius: borderRadius,
    borderStyle: borderStyle,
  };

  return <div style={ellipseStyle}></div>;
};

export {
  Rectangle,
  Circle,
  Triangle,
  Line,
  SingleArrowLine,
  DoubleArrowLine,
  Ellipse,
};
