import { Rnd } from "react-rnd";
const ShapesHandler = (props) => {
  const {
    type,
    className,
    borderWidth,
    borderColor,
    width,
    height,
    fillColor,
  } = props;

  const generateClassName = () => {
    console.log("doll");
  };

  return (
    <Rnd
      className={`flex items-center justify-center border border-black bg-transparent`}
      default={{
        x: 0,
        y: 0,
        width: 320,
        height: 200,
      }}
    >
      Rnd
    </Rnd>
  );
};

export default ShapesHandler;
