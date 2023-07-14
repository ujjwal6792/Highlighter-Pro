import { ChangeEvent } from "react";
import {
  usePropertiesStore,
  useSelectedShapeStore,
  useShapeStore,
} from "../../store";

const ChangeShapeProperties = () => {
  const { properties, updateProperties } = usePropertiesStore();
  const { updateShapeArray } = useShapeStore();
  const { id } = useSelectedShapeStore();

  const setNewProperties = (e: ChangeEvent, property: string) => {
    if (e.target instanceof HTMLInputElement) {
      const value = e.target.value;
      updateProperties({ [property]: value });
      updateShapeArray({
        id: id,
        properties: { ...properties, [property]: value },
      });
    }
  };

  return (
    <div>
      <section className="flex justify-between my-2">
        <h3>Border Color</h3>
        <input
          onChange={(e) => setNewProperties(e, "borderColor")}
          value={properties.borderColor}
          type="text"
        />
      </section>
      <section className="flex justify-between my-2">
        <h3>Fill Color</h3>
        <input
          onChange={(e) => setNewProperties(e, "fillColor")}
          value={properties.fillColor}
          type="text"
        />
      </section>
      <section className="flex justify-between my-2">
        <h3>Border Radius</h3>{" "}
        <input
          onChange={(e) => setNewProperties(e, "borderRadius")}
          value={properties.borderRadius}
          type="number"
        />
      </section>
      <section className="flex justify-between my-2">
        <h3>Border Width</h3>
        <input
          onChange={(e) => setNewProperties(e, "borderWidth")}
          value={properties.borderWidth}
          type="number"
        />
      </section>
      {/* <section className="flex justify-between my-2">
        <h3>Dimension</h3><input onChange={(e)=>updateProperties({dimension: Number(e.target.value)})} value={properties.dimension} type="text" />
        </section> */}
    </div>
  );
};

export default ChangeShapeProperties;
