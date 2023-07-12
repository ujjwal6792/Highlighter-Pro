import {create} from 'zustand';
import { proptypes, TypeEnum, TextPositionEnum, BorderStyleEnum } from '../shapeTypes';

interface shapeStore extends proptypes {
  updateShape: (newShape: proptypes) => void;
}

// Create the Zustand store
export const useShapeStore = create<shapeStore>((set) => ({
  type: TypeEnum.circle,
  dimension: 200,
  borderColor: '#000000',
  borderWidth: '2px',
  borderRadius: '10px',
  fillColor: 'transparent',
  textPosition: TextPositionEnum.bottom,
  borderStyle: BorderStyleEnum.Solid,
  text: '',
  updateShape: (newShape: proptypes) => {
    set(() => ({ ...newShape }));
  },
}));
