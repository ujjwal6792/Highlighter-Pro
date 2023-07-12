import { create } from "zustand";
import {
  proptypes,
  TypeEnum,
  TextPositionEnum,
  BorderStyleEnum,
} from "../shapeTypes";

export interface ShapeStore {
  shape: proptypes;
  updateShape: (newShape: Partial<proptypes>) => void;
}
interface imageStore {
  imageData: string;
  setImageData: (imageData: string) => void;
}

// Create the Zustand store
export const useShapeStore = create<ShapeStore>((set) => ({
  shape: {
    type: TypeEnum.circle,
    dimension: 200,
    borderColor: "#000000",
    borderWidth: "2px",
    borderRadius: "10px",
    fillColor: "transparent",
    textPosition: TextPositionEnum.bottom,
    borderStyle: BorderStyleEnum.Solid,
    text: "",
  },
  updateShape: (newShape: Partial<proptypes>) => {
    set((state) => ({
      shape: {
        ...state.shape,
        ...newShape,
      },
    }));
  },
}));


export const useImageStore = create<imageStore>((set) => ({
  imageData: "",
  setImageData: (imageData: string) => {
    set({ imageData });
  },
}));
