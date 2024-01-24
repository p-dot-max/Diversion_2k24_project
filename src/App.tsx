import NavBar from "./components";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
<<<<<<< HEAD

=======
      <main className="static">

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
>>>>>>> 234cc01760285bbadb31414bcd92d3d4a4e5a145
    </>
  );
}

export default App;
