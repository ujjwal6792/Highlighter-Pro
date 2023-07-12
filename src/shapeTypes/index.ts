export enum textPositionEnum {
  top = "top",
  bottom = "bottom",
  left = "left",
  right = "right",
  topRight = "top-right",
  topLeft = "top-left",
  bottomRight = "bottom-right",
  bottomLeft = "bottom-left",
}
export enum typeEnum {
  rect = "rect",
  circle = "circle",
  square = "square",
  arrow = "arrow",
  triangle = "triangle",
}
export interface proptypes {
  type: typeEnum;
  text?: string;
  textPosition?: textPositionEnum;
  className?: string;
  borderWidth?: number;
  borderColor?: string;
  borderRadius?: number;
  fillColor?: string;
  dimension?: number;
}

export interface objectSize {
  width: number;
  height: number;
}
