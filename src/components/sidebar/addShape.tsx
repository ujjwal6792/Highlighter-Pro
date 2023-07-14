import { TypeEnum } from "../../shapeTypes";
import { usePropertiesStore } from "../../store";

const AddShape = () => {
  const { updateProperties } = usePropertiesStore();
  const shapes = Object.keys(TypeEnum).map((item) =>
    item === "rect" ? "rectangle" : item
  );

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
