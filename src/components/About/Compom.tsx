import img from "./Farmer.png";
import img2 from "./Girls.png";

const Compom = () => {
  return (
    <>
      <div className="flex">
        <div className="">
            <img src={img} />
        </div>

        <div>
            Example
        </div>

        <div>
            <img src={img2} />
        </div>
      </div>
    </>
  );
};

export default Compom;
