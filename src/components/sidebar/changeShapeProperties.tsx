import { ChangeEvent, useState } from "react";
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
import { HexColorPicker } from "react-colorful";
import useClickOutside from "src/utils/useClickOutside";

const borderStyles = Object.keys(BorderStyleEnum);

const ChangeShapeProperties = () => {
  const { properties, updateProperties } = usePropertiesStore();
  const [showColorPicker, setShowColorPicker] = useState({
    border: false,
    fill: false,
  });
  const { updateShapeArray } = useShapeStore();
  const { id } = useSelectedShapeStore();
  const closeBorderColorPicker = () =>
    setShowColorPicker((o) => ({ ...o, border: false }));
  const closeFillColorPicker = () =>
    setShowColorPicker((o) => ({ ...o, fill: false }));

  const borderColorPickerRef = useClickOutside(closeBorderColorPicker);
  const fillColorPickerRef = useClickOutside(closeFillColorPicker);

  const setNewProperties = (e: ChangeEvent | string, property: string) => {
    let value;
    if (typeof e !== "string" && e.target instanceof HTMLInputElement) {
      value = property === "rotation" ? Number(e.target.value) : e.target.value;
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
      <section
        ref={borderColorPickerRef}
        className="relative flex justify-between my-3 items-center"
      >
        <h3 className="cursor-default select-none">Border Color</h3>
        <input
          className=" w-1/2 border shadow rounded-md px-2 py-1 focus:outline-none"
          onChange={(e) => setNewProperties(e, "borderColor")}
          value={properties.borderColor}
          type="text"
        />
        <span
          style={{ background: properties.borderColor }}
          className="absolute w-8 top-0 bottom-0 right-0 rounded-r-md cursor-pointer"
          onClick={() =>
            setShowColorPicker((o) => ({ fill: false, border: !o.border }))
          }
        ></span>
        {showColorPicker.border ? (
          <section className="absolute bottom-10 right-0">
            <HexColorPicker
              color={properties.borderColor}
              onChange={(e) => setNewProperties(e, "borderColor")}
            />
          </section>
        ) : (
          <></>
        )}
      </section>
      <section
        ref={fillColorPickerRef}
        className="relative flex justify-between my-3 items-center"
      >
        <h3 className="cursor-default select-none">Fill Color</h3>
        <input
          className="w-1/2 border shadow rounded-md px-2 py-1 focus:outline-none"
          onChange={(e) => setNewProperties(e, "fillColor")}
          value={properties.fillColor}
          type="text"
        />
        <span
          style={{ background: properties.fillColor }}
          className="absolute w-8 top-0 bottom-0 right-0 rounded-r-md cursor-pointer"
          onClick={() =>
            setShowColorPicker((o) => ({ border: false, fill: !o.fill }))
          }
        ></span>
        {showColorPicker.fill ? (
          <section className="absolute bottom-10 right-0">
            <HexColorPicker
              color={properties.fillColor}
              onChange={(e) => setNewProperties(e, "fillColor")}
            />
          </section>
        ) : (
          <></>
        )}
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
        <h3 className="cursor-default select-none">Rotation</h3>
        <input
          className="w-1/2 border shadow rounded-md px-2 py-1"
          onChange={(e) => setNewProperties(e, "rotation")}
          value={properties.rotation}
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
