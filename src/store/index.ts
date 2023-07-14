import { create } from "zustand";
import {
  proptypes,
  TypeEnum,
  TextPositionEnum,
  BorderStyleEnum,
} from "../shapeTypes";

export const usePropertiesStore = create<shapeProperties>((set) => ({
  properties: {
    type: TypeEnum.rect,
    dimension: 200,
    borderColor: "#000000",
    borderWidth: "2",
    borderRadius: "0",
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

export const useShapeStore = create<ShapeStore>((set) => ({
  AddedShapes: [],
  updateShapeArray: (newShape: addedShapes) => {
    set((state) => {
      const stateArray = state.AddedShapes;
      const index = state.AddedShapes.findIndex(
        (obj) => obj.id === newShape.id
      );
      if (index !== -1) {
        stateArray[index] = newShape;
      } else {
        stateArray.push(newShape);
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

export const useSelectedShapeStore = create<selectedShapeId>((set) => ({
  id: "",
  setSelectedShape: (id: string) => {
    set({ id });
  },
}));

// types and interfaces
type addedShapes = {
  id: string;
  properties: proptypes;
};

interface selectedShapeId {
  id: string;
  setSelectedShape: (id: string) => void;
}

export interface shapeProperties {
  properties: proptypes;
  updateProperties: (newProperties: Partial<proptypes>) => void;
}
export interface ShapeStore {
  AddedShapes: addedShapes[];
  updateShapeArray: (newShape: addedShapes) => void;
}
interface imageStore {
  imageData: string;
  setImageData: (imageData: string) => void;
}
