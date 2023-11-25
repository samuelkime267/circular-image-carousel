import { OrbitControls } from "@react-three/drei";
import Card from "./components/Card";
import setControls from "../utils/setContorls";
import cardLogic from "../utils/cardLogic";
import Glass from "./components/Glass";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Experience = () => {
  const { timeFake, amplifier, distance, segments } = setControls();
  const { curve, incDegree, textures } = cardLogic({ amplifier });

  const cardsGroup = useRef();
  useFrame(() => {
    cardsGroup.current.rotation.y += 0.001;
  });

  return (
    <>
      <color attach="background" args={["#000"]} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        rotateSpeed={-0.5}
      />

      <group ref={cardsGroup}>
        {textures.map((texture, i) => {
          const position = [
            Math.sin(incDegree * i) * distance,
            0,
            Math.cos(incDegree * i) * distance,
          ];
          const rotation = [0, incDegree * i + Math.PI, 0];

          return (
            <Card
              texture={texture}
              position={position}
              rotation={rotation}
              segments={segments}
              amplifier={amplifier}
              curve={curve}
              timeFake={timeFake}
              key={i}
            />
          );
        })}
      </group>

      {/* <Glass /> */}
    </>
  );
};

export default Experience;
