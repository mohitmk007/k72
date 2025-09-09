import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projects from "./pages/Projects";
import Navbar from "./components/Navigation/Navbar";
import ReactLenis from "lenis/react";


const App = () => {

  return (
    <>
      <ReactLenis

        root options={{
          lerp: 0.1,
          duration: 1.2,
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2
        }}>

        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agence" element={<Agence />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>;
      </ReactLenis>
    </>
  )
};

export default App;
