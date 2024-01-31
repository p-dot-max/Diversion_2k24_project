import NavBar from "./components";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";


function App() {
  return (
    <>
      <main className="w-full h-screen">

        {/* Navbar parent section */}
        <nav className="flex justify-center items-center w-full h-20">
          <NavBar />
        </nav>

        {/* Outlet renders children paths i.e, in our case the paths in navbar */}
        <Outlet />

        <main>
          <About />
        </main>

        {/* Footer parent section */}
        <footer className="flex justify-center items-center w-full h-10 bg-slate-300">
          <Footer />
        </footer>      

      </main>
    </>
  );
}

export default App;
