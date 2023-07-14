import { Rnd } from "react-rnd";
import {
  Circle,
  Rectangle,
  SingleArrowLine,
  Square,
  Triangle,
} from "../../assets/shapesJsx";
import { usePropertiesStore, useSelectedShapeStore, useShapeStore } from "../../store";
const ShapesHandler = () => {
  const {AddedShapes} = useShapeStore()
  const {setSelectedShape} = useSelectedShapeStore()
  const {updateProperties} =  usePropertiesStore()

  return (
    <div className="">
      { AddedShapes.map((shape)=> {
        const {    type,
          borderColor,
          borderWidth,
          borderRadius,
          fillColor,
          textPosition,
          borderStyle,
          text} = shape.properties
      return <Rnd
      key={shape.id}
        onClick = {()=> {setSelectedShape(shape.id); updateProperties(shape.properties)}}
        style={{ display: "flex" }}
        className={`justify-center items-center hover:border-[1.5px] border-dashed border-black rounded-md`}
        default={{
          x: 100,
          y: 100,
          width: 220,
          height: type === "rect" ? 220 / 1.5 : 220,
        }}
        enableResizing={{
          top: type === "rect",
          right: type === "rect",
          bottom: type === "rect",
          left: type === "rect",
          topRight: true,
          bottomRight: true,
          bottomLeft: true,
          topLeft: true,
        }}
        lockAspectRatio={type === "rect" ? false : true}
      >
        {type === "square" ? (
          <Square
            height={200}
            width={200}
            borderColor={borderColor}
            fillColor={fillColor}
            borderWidth={borderWidth}
            borderRadius={borderRadius}
            borderStyle={borderStyle}
          />
        ) : type === "circle" ? (
          <Circle
            height={200}
            width={200}
            borderColor={borderColor}
            fillColor={fillColor}
            borderWidth={borderWidth}
            borderRadius={"50%"}
            borderStyle={borderStyle}
          />
        ) : type === "arrow" ? (
          <SingleArrowLine
            borderColor={borderColor}
            fillColor={fillColor}
            borderWidth={borderWidth}
            borderRadius={borderRadius}
            borderStyle={borderStyle}
          />
        ) : type === "triangle" ? (
          <Triangle
            borderColor={borderColor}
            fillColor={fillColor}
            borderWidth={borderWidth}
            borderRadius={borderRadius}
            borderStyle={borderStyle}
          />
        ) : (
          <Rectangle
            borderColor={borderColor}
            fillColor={fillColor}
            borderWidth={borderWidth}
            borderRadius={borderRadius}
            borderStyle={borderStyle}
          />
        )}
        {text !== undefined && text?.length > 0 && (
          <span className={textPosition}>{text}</span>
        )}
      </Rnd>
      }
      )
}
    </div>
  );
};

export default ShapesHandler;
