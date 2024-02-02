import img from "./Farmer.png";
import img2 from "./Girls.png";

const Compom = () => {
  return (
    <>
      <div className="flex justify-center items-center space-x-4 my-8">
        <div className="flex-1 flex justify-center">
            <img src={img} alt="Farmer" className="max-h-60" /> {/* Adjust image height as needed */}
        </div>

        <div className="flex-1 text-center">
            <p>Example text about</p>
        </div>

        <div className="flex-1 flex justify-center">
            <img src={img2} alt="Girls" className="max-h-60" /> {/* Adjust image height as needed */}
        </div>
      </div>
    </>
  );
};


export default Compom;
