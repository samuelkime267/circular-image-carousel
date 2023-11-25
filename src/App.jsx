import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { Stats } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Leva } from "leva";
import "./style/App.css";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <Loader />
      <Leva collapsed />
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 1], fov: 50, near: 0.001, far: 1000000 }}>
          <Perf position="bottom-right" />
          <Stats />
          <Experience />
        </Canvas>
      </div>
    </>
  );
}

export default App;
