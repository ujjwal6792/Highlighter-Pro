import React from "react";

interface SquareProps {
  size: number;
  borderColor: string;
  fillColor: string;
}

const Square: React.FC<SquareProps> = ({ size, borderColor, fillColor }) => (
  <svg width={size} height={size}>
    <rect width={size} height={size} stroke={borderColor} fill={fillColor} />
  </svg>
);

interface RectangleProps {
  width: number;
  height: number;
  borderColor: string;
  fillColor: string;
}

const Rectangle: React.FC<RectangleProps> = ({
  width,
  height,
  borderColor,
  fillColor,
}) => (
  <svg width={width} height={height}>
    <rect width={width} height={height} stroke={borderColor} fill={fillColor} />
  </svg>
);

interface CircleProps {
  radius: number;
  borderColor: string;
  fillColor: string;
}

const Circle: React.FC<CircleProps> = ({ radius, borderColor, fillColor }) => (
  <svg width={radius * 2} height={radius * 2}>
    <circle
      cx={radius}
      cy={radius}
      r={radius}
      stroke={borderColor}
      fill={fillColor}
    />
  </svg>
);

interface OvalProps {
  width: number;
  height: number;
  borderColor: string;
  fillColor: string;
}

const Oval: React.FC<OvalProps> = ({
  width,
  height,
  borderColor,
  fillColor,
}) => (
  <svg width={width} height={height}>
    <ellipse
      cx={width / 2}
      cy={height / 2}
      rx={width / 2}
      ry={height / 2}
      stroke={borderColor}
      fill={fillColor}
    />
  </svg>
);

interface ArrowProps {
  width: number;
  height: number;
  borderColor: string;
  fillColor: string;
}

const Arrow: React.FC<ArrowProps> = ({
  width,
  height,
  borderColor,
  fillColor,
}) => (
  <svg width={width} height={height}>
    <polygon
      points={`0,0 ${width},0 ${width / 2},${height}`}
      stroke={borderColor}
      fill={fillColor}
    />
  </svg>
);

interface TriangleProps {
  size: number;
  borderColor: string;
  fillColor: string;
}

const Triangle: React.FC<TriangleProps> = ({
  size,
  borderColor,
  fillColor,
}) => (
  <svg width={size} height={size}>
    <polygon
      points={`0,${size} ${size / 2},0 ${size},${size}`}
      stroke={borderColor}
      fill={fillColor}
    />
  </svg>
);

interface LineProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  borderColor: string;
}

const Line: React.FC<LineProps> = ({ x1, y1, x2, y2, borderColor }) => (
  <svg>
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={borderColor} />
  </svg>
);

interface SpiralArrowProps {
  width: number;
  height: number;
  borderColor: string;
  fillColor: string;
}

const SpiralArrow: React.FC<SpiralArrowProps> = ({
  width,
  height,
  borderColor,
  fillColor,
}) => (
  <svg width={width} height={height}>
    <path
      d={`M0,0 C0,${height / 2} ${width},${height / 2} ${width},${height}`}
      stroke={borderColor}
      fill={fillColor}
    />
  </svg>
);

export { Square, Rectangle, Circle, Oval, Arrow, Triangle, Line, SpiralArrow };
