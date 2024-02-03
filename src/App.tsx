import NavBar from "./components";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <main className="w-full min-h-screen dark:bg-gray-900">

        {/* Navbar parent section */}
<<<<<<< HEAD
        <nav className="flex justify-center items-center w-full h-20 z-20 bg-white sticky top-0">
=======
        {/* flex justify-center items-center w-full h-20 */}
        <nav className="flex justify-center items-center w-full h-20 sticky top-0 bg-white">
>>>>>>> aedd03cdbabd1c94688b0a5423c592d14a59806e
          <NavBar />
        </nav>

        {/* Outlet renders children paths i.e, in our case the paths in navbar */}
        <Outlet />
        
        <hr className="border-gray-500"></hr>
        {/* Footer parent section */}
        <footer className="container">
          <Footer />
        </footer>

      </main>
    </>
  );
}

export default App;
