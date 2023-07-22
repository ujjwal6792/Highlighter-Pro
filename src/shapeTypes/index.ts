export enum TextPositionEnum {
  top = "top",
  bottom = "bottom",
  left = "left",
  right = "right",
  topRight = "top-right",
  topLeft = "top-left",
  bottomRight = "bottom-right",
  bottomLeft = "bottom-left",
}
export enum TypeEnum {
  rect = "rect",
  circle = "circle",
  eclipse = "eclipse",
  square = "square",
  arrow = "arrow",
  triangle = "triangle",
}
export enum BorderStyleEnum {
  None = "none",
  Solid = "solid",
  Dashed = "dashed",
  Dotted = "dotted",
  Double = "double",
}
export interface proptypes {
  type: TypeEnum;
  text?: string;
  textPosition?: TextPositionEnum;
  className?: string;
  borderWidth: string;
  borderColor: string;
  borderRadius: string;
  borderStyle: BorderStyleEnum;
  fillColor: string;
  dimension: number;
  rotation: number;
}

export interface objectSize {
  width: number;
  height: number;
}
