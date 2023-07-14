import { usePropertiesStore } from "../../store";

const ChangeShapeProperties = () => {
    const {properties, updateProperties } = usePropertiesStore();

  return (
    <div>
        <section className="flex justify-between my-2">
        <h3>Border Color</h3><input onChange={(e)=>updateProperties({borderColor: e.target.value})} value={properties.borderColor} type="text" />
        </section>
        <section className="flex justify-between my-2">
        <h3>Fill Color</h3><input onChange={(e)=>updateProperties({fillColor: e.target.value})} value={properties.fillColor} type="text" />
        </section>
        <section className="flex justify-between my-2">
       <h3>Border Radius</h3> <input onChange={(e)=>updateProperties({borderRadius: e.target.value})} value={properties.borderRadius} type="number"/>
        </section>
        <section className="flex justify-between my-2">
        <h3>Border Width</h3><input onChange={(e)=>updateProperties({borderWidth: e.target.value})} value={properties.borderWidth} type="number" />
        </section>
        {/* <section className="flex justify-between my-2">
        <h3>Dimension</h3><input onChange={(e)=>updateProperties({dimension: Number(e.target.value)})} value={properties.dimension} type="text" />
        </section> */}
    </div>
  )
}

export default ChangeShapeProperties