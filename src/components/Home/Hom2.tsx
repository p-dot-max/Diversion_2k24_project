import boy from './boy.png';

function Home2() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <main className="flex flex-1 flex-col-reverse md:flex-row items-center justify-center p-8">
        {/* Text Section used uuupp*/}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
            Revolutionizing Agriculture with Our{" "}
            <div className="mt-4">
              <span className=" text-green-700">
                All-in-One AgriTech Ecosystem
              </span>
            </div>
          </h1>
          <p className="mt-4 text-[#0A3200] text-lg md:text-xl font-normal">
            Seamless Blockchain Supply Chains, Smart E-Commerce, and
            Cutting-Edge AI for Healthier Crops and Bountiful Yields. Experience
            the Future of Farming Today.
          </p>
          <div className="mt-8 flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <button className="text-white bg-green-600 hover:bg-green-700 font-medium py-3 px-6 rounded-md">
              Get Started
            </button>
            <button className="text-green-600 bg-transparent hover:bg-green-100 font-medium py-3 px-6 rounded-md">
              See how it works
            </button>
          </div>
        </div>

        {/* Image commmming*/}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={boy}
            alt="Hero"
            className="w-56 md:w-auto"
            style={{ height: "842.353px" }}
          />
          {/* <div className="w-56 md:w-auto h-[842.353px] bg-gray-300"></div> */}
        </div>
      </main>
    </div>
  );
}

export default Home2;