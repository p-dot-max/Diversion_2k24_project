import FaqSection from "../Faq/Faq2";
import Compom from "../About/Compom";

function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto p-6">
        <div className="text-center px-6 py-12 md:py-24">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white">
            Revolutionizing Agriculture with Our <span className="text-green-600">All-in-One AgriTech Ecosystem</span>
          </h1>
          <p className="mt-20 text-xl text-gray-600 dark:text-white">
            Seamless Blockchain Supply Chains, Smart E-Commerce, and Cutting-Edge AI for Healthier Crops and Bountiful Yields. Experience the Future of Farming Today.
          </p>
          <div className="mt-8 flex justify-center">
            <button className="text-white bg-green-500 hover:bg-green-600 font-semibold py-3 px-6 rounded-md mr-2">
              Get Started
            </button>
            <button className="text-green-600 bg-transparent hover:bg-green-100 font-semibold py-3 px-6 rounded-md">
              See how it works
            </button>
          </div>
        </div>

        {/* Compom Component */}
        <Compom />

        {/* About and FAQ Section here*/}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-6">
            About Us
          </h2>
          <div className="text-center text-xl text-gray-600 dark:text-white mb-10">
            Discover our mission to innovate agriculture through technology, making farming more efficient, sustainable, and profitable for everyone.
          </div>
          <FaqSection />
        </div>
      </div>
    </div>
  );
}

export default Home;
