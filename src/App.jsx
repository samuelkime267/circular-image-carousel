import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { Stats } from "@react-three/drei";
import "./style/App.css";

function App() {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 1], fov: 50, near: 0.001, far: 1000000 }}>
        <Stats />
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
