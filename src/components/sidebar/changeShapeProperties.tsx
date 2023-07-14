import { useShapeStore } from "../../store";

const ChangeShapeProperties = () => {
    const {shape, updateShape } = useShapeStore();

  return (
    <div>
        <section className="flex justify-between my-2">
        <h3>Border Color</h3><input onChange={(e)=>updateShape({borderColor: e.target.value})} value={shape.borderColor} type="text" />
        </section>
        <section className="flex justify-between my-2">
        <h3>Fill Color</h3><input onChange={(e)=>updateShape({fillColor: e.target.value})} value={shape.fillColor} type="text" />
        </section>
        <section className="flex justify-between my-2">
       <h3>Border Radius</h3> <input onChange={(e)=>updateShape({borderRadius: e.target.value})} value={shape.borderRadius} type="number"/>
        </section>
        <section className="flex justify-between my-2">
        <h3>Border Width</h3><input onChange={(e)=>updateShape({borderWidth: e.target.value})} value={shape.borderWidth} type="number" />
        </section>
        {/* <section className="flex justify-between my-2">
        <h3>Dimension</h3><input onChange={(e)=>updateShape({dimension: Number(e.target.value)})} value={shape.dimension} type="text" />
        </section> */}
    </div>
  )
}

export default ChangeShapeProperties