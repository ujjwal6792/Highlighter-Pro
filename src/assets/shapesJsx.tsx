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
  borderWidth = "2px",
  borderColor = "black",
  borderRadius = "0",
  borderStyle = "solid",
}) => {
  const squareStyle = {
    width: width,
    aspectRatio: '1/1',
    backgroundColor: fillColor,
    borderWidth: borderWidth,
    borderColor: borderColor,
    borderRadius: borderRadius,
    borderStyle: borderStyle,
  };

  return <div style={squareStyle}></div>;
};

const Rectangle: React.FC<ShapeProps> = ({
  fillColor = "transparent",
  borderWidth = "2px",
  borderColor = "black",
  borderRadius = "0",
  borderStyle = "solid",
}) => {
  const rectangleStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: fillColor,
    borderWidth: borderWidth,
    borderColor: borderColor,
    borderRadius: borderRadius,
    borderStyle: borderStyle,
  };

  return <div style={rectangleStyle}></div>;
};

const Circle: React.FC<ShapeProps> = ({
  width = 100,
  height = 100,
  fillColor = "transparent",
  borderWidth = "2px",
  borderColor = "black",
  borderRadius = "50%",
  borderStyle = "solid",
}) => {
  const circleStyle = {
    width: width,
    height: height,
    backgroundColor: fillColor,
    borderWidth: borderWidth,
    borderColor: borderColor,
    borderRadius: borderRadius,
    borderStyle: borderStyle,
  };

  return <div style={circleStyle}></div>;
};

const Triangle: React.FC<ShapeProps> = ({
  fillColor = "transparent",
  borderWidth = "2px",
  borderColor = "black",
  borderRadius = "0",
  borderStyle = "solid",
}) => {
  const triangleStyle = {
    width: "0",
    height: "0",
    borderTopWidth: "0",
    borderRightWidth: "5px",
    borderBottomWidth: "10px",
    borderLeftWidth: "5px",
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: borderColor,
    borderLeftColor: "transparent",
    borderRadius: borderRadius,
    borderStyle: borderStyle,
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

  return (
    <div style={arrowLineStyle}>
      <div style={arrowStyle}></div>
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
