import NavBar from "./components";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <main className="static w-full">

        {/* Navbar parent section */}
        <nav className="flex justify-center items-center w-full h-20">
          <NavBar />
        </nav>

        {/* Outlet renders children paths i.e, in our case the paths in navbar */}
        <Outlet />

        {/* Footer parent section */}
        <footer className="flex justify-center items-center w-full h-2/5 absolute bottom-0 bg-slate-500">
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default App;
