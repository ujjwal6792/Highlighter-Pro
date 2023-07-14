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

const Square: React.FC<ShapeProps> = ({
  width = 100,
  fillColor = "transparent",
  borderWidth = "2",
  borderColor = "black",
  borderRadius = "0",
  borderStyle = "solid",
}) => {
  const squareStyle = {
    width: width,
    aspectRatio: '1/1',
    backgroundColor: fillColor,
    borderWidth: borderWidth + "px",
    borderColor: borderColor,
    borderRadius: borderRadius+'px',
    borderStyle: borderStyle,
  };

  return <div style={squareStyle}></div>;
};

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
    borderWidth: borderWidth+'px',
    borderColor: borderColor,
    borderRadius: borderRadius+'px',
    borderStyle: borderStyle,
  };

  return <div style={rectangleStyle}></div>;
};

const Circle: React.FC<ShapeProps> = ({
  width = 100,
  height = 100,
  fillColor = "transparent",
  borderWidth = "2",
  borderColor = "black",
  borderStyle = "solid",
}) => {
  const circleStyle = {
    width: width,
    height: height,
    backgroundColor: fillColor,
    borderWidth: borderWidth+'px',
    borderColor: borderColor,
    borderRadius: "50%",
    borderStyle: borderStyle,
  };

  return <div style={circleStyle}></div>;
};

const Triangle: React.FC<ShapeProps> = ({
  borderWidth = "90%",
  borderColor = "black",
}) => {
  const triangleStyle = {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderTop: `${(8*Number(borderWidth)).toString()}px solid transparent `,
    borderBottom: `${(8*Number(borderWidth)).toString()}px solid transparent`,
    borderRight: `${(8*Number(borderWidth)).toString()}px solid  ${borderColor}`,
  };

  return <div style={triangleStyle}></div>;
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
    borderWidth: borderWidth+"px",
    borderColor: borderColor,
    borderRadius: borderRadius + "px",
    borderStyle: borderStyle,
  };

  const arrowStyle = {
    top: '50%',
    left: 0,
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderTop: `${(4*Number(borderWidth)).toString()}px solid transparent `,
    borderBottom: `${(4*Number(borderWidth)).toString()}px solid transparent`,
    borderRight: `${(4*Number(borderWidth)).toString()}px solid  ${borderColor}`,
  };

  return (
    <div className="relative" style={arrowLineStyle}>
      <div className="absolute -translate-y-1/2 -translate-x-1/2 " style={arrowStyle}></div>
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
    width: "100%",
    height: borderWidth,
    backgroundColor: fillColor,
    borderWidth: "0",
    borderColor: borderColor,
    borderRadius: borderRadius,
    borderStyle: borderStyle,
    position: "relative",
  };

  const arrowStyle = {
    position: "absolute",
    top: "50%",
    left: "100%",
    width: "4px",
    height: "100%",
    backgroundColor: fillColor,
  };

  const secondArrowStyle = {
    position: "absolute",
    top: "50%",
    right: "100%",
    width: "4px",
    height: "100%",
    backgroundColor: fillColor,
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
  Square,
  Rectangle,
  Circle,
  Triangle,
  Line,
  SingleArrowLine,
  DoubleArrowLine,
  Ellipse,
};
