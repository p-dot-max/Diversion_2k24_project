import Compom from "./Compom";
import FaqSection from "../Faq/Faq2";

const About = () => {
  return (
    <>
      <div>
        <h2 className="flex-col justify-between">About Us</h2>
      </div>
      <div>
        <Compom />
      </div>
      <div className="flex justify-center items-center my-10">
        <div className="w-full max-w-3xl">
          <FaqSection />
        </div>
      </div>
    </>
  );
};

export default About;
