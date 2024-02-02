import FaqSection from "../Faq/Faq2";
import Cards from "./Cards";

const About = () => {
  return (
    <>
      <div className="my-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-10">
          About Us
        </h2>
        <p className="text-xl text-gray-600 dark:text-white text-center max-w-4xl mx-auto my-10">
          Discover our mission to innovate agriculture through technology,
          making farming more efficient, sustainable, and profitable for
          everyone.
        </p>
      </div>
      <Cards />
      <FaqSection />
    </>
  );
};

export default About;
