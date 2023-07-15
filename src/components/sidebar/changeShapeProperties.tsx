import { ChangeEvent } from "react";
import {
  usePropertiesStore,
  useSelectedShapeStore,
  useShapeStore,
} from "src/store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "src/components/ui/dropdown-menu";
import { BorderStyleEnum } from "src/shapeTypes";

const borderStyles = Object.keys(BorderStyleEnum);

const ChangeShapeProperties = () => {
  const { properties, updateProperties } = usePropertiesStore();
  const { updateShapeArray } = useShapeStore();
  const { id } = useSelectedShapeStore();

  const setNewProperties = (e: ChangeEvent | string, property: string) => {
    let value;
    if (typeof e !== "string" && e.target instanceof HTMLInputElement) {
      value = e.target.value;
    } else if (typeof e === "string") {
      value = e;
    }
    updateProperties({ [property]: value });
    updateShapeArray({
      id: id,
      properties: { ...properties, [property]: value },
    });
  };

  return (
    <div>
      <section className="flex justify-between my-3 items-center">
        <h3 className="cursor-default select-none">Border Color</h3>
        <input
          className="w-1/2 border shadow rounded-md px-2 py-1"
          onChange={(e) => setNewProperties(e, "borderColor")}
          value={properties.borderColor}
          type="text"
        />
      </section>
      <section className="flex justify-between my-3 items-center">
        <h3 className="cursor-default select-none">Fill Color</h3>
        <input
          className="w-1/2 border shadow rounded-md px-2 py-1"
          onChange={(e) => setNewProperties(e, "fillColor")}
          value={properties.fillColor}
          type="text"
        />
      </section>
      <section className="flex justify-between my-3 items-center">
        <h3 className="cursor-default select-none">Border Radius</h3>{" "}
        <input
          className="w-1/2 border shadow rounded-md px-2 py-1"
          onChange={(e) => setNewProperties(e, "borderRadius")}
          value={properties.borderRadius}
          type="number"
        />
      </section>
      <section className="flex justify-between my-3 items-center">
        <h3 className="cursor-default select-none">Border Width</h3>
        <input
          className="w-1/2 border shadow rounded-md px-2 py-1"
          onChange={(e) => setNewProperties(e, "borderWidth")}
          value={properties.borderWidth}
          type="number"
        />
      </section>
      <section className="flex justify-between my-3 items-center">
        <h3 className="cursor-default select-none">Border Style</h3>
        <DropdownMenu>
          <DropdownMenuTrigger className="w-1/2 border shadow bg-white rounded-md px-2 py-1 ">
            Current - {properties.borderStyle}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {borderStyles.map((item, i) => (
              <div key={i}>
                <DropdownMenuItem
                  onClick={() => setNewProperties(item, "borderStyle")}
                >
                  {item}
                </DropdownMenuItem>
                {i !== borderStyles.length - 1 && <DropdownMenuSeparator />}
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
    </div>
  );
};

export default ChangeShapeProperties;
