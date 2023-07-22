import { Rnd } from "react-rnd";
import {
  Circle,
  Rectangle,
  SingleArrowLine,
  Triangle,
} from "src/assets/shapesJsx";
import {
  usePropertiesStore,
  useSelectedShapeStore,
  useShapeStore,
} from "src/store/";

const ShapesHandler = () => {
  const { AddedShapes } = useShapeStore();
  const { id, setSelectedShape } = useSelectedShapeStore();
  const { updateProperties } = usePropertiesStore();
  // const [rotationAngle, setRotationAngle] = useState(properties.rotation)
  // const [showRotation, setShowRotation] = useState(false);
  // const [lastClickTime, setLastClickTime] = useState(0);
  // const longPressTimeoutRef = useRef<NodeJS.Timeout | null>(null); // Ref to store the timeout ID
  // const incrementIntervalRef = useRef<NodeJS.Timeout | null>(null); // Ref to store the interval ID
  // const decrementIntervalRef = useRef<NodeJS.Timeout | null>(null); // Ref to store the interval ID

  // const handleMouseDown = (rotateFunc: () => void) => {
  //   longPressTimeoutRef.current = setTimeout(() => {
  //     rotateFunc(); // Call the respective rotate function

  //     // Start incrementing or decrementing the angle continuously
  //     if (rotateFunc === handleClockwiseRotation) {
  //       incrementIntervalRef.current = setInterval(() => {
  //         rotateFunc();
  //       }, 50);
  //     } else if (rotateFunc === handleAnticlockwiseRotation) {
  //       decrementIntervalRef.current = setInterval(() => {
  //         rotateFunc();
  //       }, 50);
  //     }
  //   }, 50);
  // };

  // const handleMouseUp = () => {
  //   clearTimeout(longPressTimeoutRef.current!); // Clear the timeout when mouse is released

  //   // Clear the increment or decrement intervals
  //   clearInterval(incrementIntervalRef.current!);
  //   clearInterval(decrementIntervalRef.current!);
  // };

  // const setNewRotation = (rotation: number) => {
  //   updateProperties({ rotation: rotation });
  //   updateShapeArray({
  //     id: id,
  //     properties: { ...properties, rotation: rotation },
  //   });
  // };

  // const handleClockwiseRotation = () => {
  //   setNewRotation(Number(properties.rotation) + 1); // Increment rotation angle by 1 degree clockwise
  // };

  // const handleAnticlockwiseRotation = () => {
  //   setNewRotation(Number(properties.rotation) - 1); // Decrement rotation angle by 1 degree anticlockwise
  // };

  return (
    <div style={{}} className="absolute top-0 left-0">
      {AddedShapes.map((shape) => {
        const {
          type,
          borderColor,
          borderWidth,
          borderRadius,
          fillColor,
          textPosition,
          borderStyle,
          text,
          rotation,
        } = shape.properties;
        return (
          <Rnd
            key={shape.id}
            onClick={() => {
              // const currentTime = new Date().getTime();
              // const clickTimeDiff = currentTime - lastClickTime;
              // const doubleClickThreshold = 300;
              // if (clickTimeDiff < doubleClickThreshold) {
              // Double click detected
              // setShowRotation((o) => !o);
              // setLastClickTime(0);
              // } else {
              // Single click detected
              if (id !== shape.id) {
                setSelectedShape(shape.id);
                updateProperties(shape.properties);
              }
              // setLastClickTime(currentTime);
              // }
            }}
            style={{ display: "flex" }}
            className={`justify-center p-1.5 items-center outline-[1.5px] hover:outline-dashed outline-fuchsia-800 rounded-md`}
            default={{
              x: 0,
              y: 0,
              width: 220,
              height: type === "rect" || type === "eclipse" ? 220 / 1.5 : 220,
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
            lockAspectRatio={
              type === "rect" || type === "eclipse" ? false : true
            }
            // onMouseUp={handleMouseUp}
          >
            {/* {showRotation && shape.id === id && (
              <div className="absolute -bottom-12 flex gap-10">
                <button
                  onMouseDown={() => handleMouseDown(handleClockwiseRotation)}
                  onMouseUp={handleMouseUp}
                >
                  Clockwise
                </button>
                <button
                  onMouseDown={() =>
                    handleMouseDown(handleAnticlockwiseRotation)
                  }
                  onMouseUp={handleMouseUp}
                >
                  Anticlockwise
                </button>
              </div>
            )} */}
            <div
              className="w-full h-full relative flex justify-center items-center"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: "transform 0.3s ease-in-out",
              }}
            >
              {type === "circle" || type === "eclipse" ? (
                <Circle
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
            </div>
            {text !== undefined && text?.length > 0 && (
              <span className={textPosition}>{text}</span>
            )}
          </Rnd>
        );
      })}
    </div>
  );
};

export default ShapesHandler;
