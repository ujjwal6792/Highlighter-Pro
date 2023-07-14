import { create } from "zustand";
import {
  proptypes,
  TypeEnum,
  TextPositionEnum,
  BorderStyleEnum,
} from "../shapeTypes";

type addedShapes = {
  id: string;
  properties: proptypes;
};
export interface shapeProperties {
  properties: proptypes;
  updateProperties: (newProperties: Partial<proptypes>) => void;
}
export interface ShapeStore {
  AddedShapes: addedShapes[];
  updateShape: (newShape: addedShapes) => void;
}
interface imageStore {
  imageData: string;
  setImageData: (imageData: string) => void;
}

export const usePropertiesStore = create<shapeProperties>((set) => ({
  properties: {
    type: TypeEnum.circle,
    dimension: 200,
    borderColor: "#000000",
    borderWidth: "2",
    borderRadius: "10",
    fillColor: "#00000000",
    textPosition: TextPositionEnum.bottom,
    borderStyle: BorderStyleEnum.Solid,
    text: "",
  },
  updateProperties: (newProperties: Partial<proptypes>) => {
    set((state) => ({
      properties: {
        ...state.properties,
        ...newProperties,
      },
    }));
  },
}));
// Create the Zustand store
export const useShapeStore = create<ShapeStore>((set) => ({
  AddedShapes: [],
  updateShape: (newShape: addedShapes) => {
    set((state) => {
      const stateArray = state.AddedShapes;
      const index = state.AddedShapes.findIndex(
        (obj) => obj.id === newShape.id
      );
      if(index !== -1) {
      stateArray[index] = newShape;
      }else{
        stateArray.push(newShape)
      }
      return {
        AddedShapes: stateArray,
      };
    });
  },
}));

export const useImageStore = create<imageStore>((set) => ({
  imageData: "",
  setImageData: (imageData: string) => {
    set({ imageData });
  },
}));
