import { create } from "zustand";
import {
  proptypes,
  TypeEnum,
  TextPositionEnum,
  BorderStyleEnum,
} from "src/shapeTypes/";

export const usePropertiesStore = create<shapeProperties>((set) => ({
  properties: {
    type: TypeEnum.rect,
    dimension: 200,
    borderColor: "#E94434",
    borderWidth: "2",
    borderRadius: "0",
    fillColor: "#00000000",
    textPosition: TextPositionEnum.bottom,
    borderStyle: BorderStyleEnum.Solid,
    text: "",
    rotation: 0,
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
  clearShapeArray: () => {
    set(() => ({ AddedShapes: [] }));
  },
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

export const useImageNameStore = create<imageNameStore>((set) => ({
  name: "",
  setName: (name: string) => {
    set({ name });
  },
}));

export const useImageInfoStore = create<imageInfoStore>((set) => ({
  imageInfo: {
    extension: "",
    width: 0,
    height: 0,
    size: 0,
  },
  updateImageInfo: (imageInfo: Partial<imageInfo>) => {
    set((state) => ({
      imageInfo: { ...state.imageInfo, ...imageInfo },
    }));
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
  clearShapeArray: ()=> void;
  updateShapeArray: (newShape: addedShapes) => void;
}
interface imageStore {
  imageData: string;
  setImageData: (imageData: string) => void;
}

interface imageNameStore {
  name: string;
  setName: (name: string) => void;
}

type imageInfo = {
  extension: string;
  width: number;
  height: number;
  size: number;
};

interface imageInfoStore {
  imageInfo: imageInfo;
  updateImageInfo: (imageInfo: Partial<imageInfo>) => void;
}
