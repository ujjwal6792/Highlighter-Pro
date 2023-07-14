import { TypeEnum, proptypes } from "../../shapeTypes";
import {
  usePropertiesStore,
  useSelectedShapeStore,
  useShapeStore,
} from "../../store";
import generateUUIDv4 from "../../utils/generateUuid";

const AddShape = () => {
  const { properties, updateProperties } = usePropertiesStore();
  const { updateShapeArray } = useShapeStore();
  const { setSelectedShape } = useSelectedShapeStore();
  const shapes = Object.keys(TypeEnum).map((item) =>
    item === "rect" ? "rectangle" : item
  );

  const updateElements = (newProperties: proptypes) => {
    const UUID = generateUUIDv4();
    setSelectedShape(UUID);
    updateShapeArray({ id: UUID, properties: newProperties });
  };

  return (
    <div>
      <h1 className="font-semibold">Add a Shape</h1>
      <div className="grid grid-cols-2 gap-2">
        {shapes.map((item, i) => {
          return (
            <div
              onClick={() => {
                const input =
                  item === "rectangle"
                    ? ("rect" as keyof typeof TypeEnum)
                    : (item as keyof typeof TypeEnum);
                updateProperties({ type: TypeEnum[input] });
                const newProperties = { ...properties, type: TypeEnum[input] };
                updateElements(newProperties);
              }}
              className="flex items-center justify-center capitalize rounded-md cursor-pointer py-1 px-2 bg-gray-600 text-white hover:bg-gray-800 transition-colors"
              key={i}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddShape;
