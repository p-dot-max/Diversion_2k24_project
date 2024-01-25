
// const Home = () => {
//   // only for inline styles for the gradient text and any other specific styles
//   const gradientTextStyle = {
//     backgroundImage: 'linear-gradient(to right, #04619f, #4fb286)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//   };
  
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <p className="font-inter text-custom font-thin leading-normal text-center">
//         <span>Revolutionizing </span>
//         <span style={gradientTextStyle}> Agriculture </span>
//         <span>with Our </span>
//         <span className="font-bold">All-in-One </span>
//         <span>AgriTech Ecosystem</span>
//       </p>
//     </div>
//   );
// };

function Home() {
  return (
    <div className="bg-white p-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center px-6 py-12 md:py-24">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
            Revolutionizing Agriculture with Our{' '}
            <div className="mt-4">
              <span className="text-green-600">All-in-One AgriTech Ecosystem</span>
            </div>
          </h1>
          <p className="mt-20 text-xl text-gray-600">
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
      </div>
    </div>
  );
}

export default Home