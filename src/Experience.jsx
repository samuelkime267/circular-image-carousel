import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import fragmentShader from "./shader/fragment.glsl";
import vertexShader from "./shader/vertex.glsl";
import { useControls, folder } from "leva";
import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import Card from "./components/Card";
import { useTexture } from "@react-three/drei";

const Experience = () => {
  const cardsLength = 12;

  const texture = useTexture([...Array(cardsLength)].map((_, i) => `/img/${i + 1}.jpg`));

  const incDegree = (Math.PI * 2) / cardsLength;

  const { timeFake, amplifier, distance, rotationX, rotationY, rotationZ, segments } = useControls(
    "Card",
    {
      Rotation: folder({
        rotationX: {
          min: -Math.PI,
          max: Math.PI,
          step: 0.01,
          value: 0,
        },
        rotationY: {
          min: -Math.PI,
          max: Math.PI,
          step: 0.01,
          value: 0,
        },
        rotationZ: {
          min: -Math.PI,
          max: Math.PI,
          step: 0.01,
          value: 0,
        },
      }),
      Uniforms: folder({
        distance: {
          value: 2.1,
          min: 0,
          max: 5,
          step: 0.01,
        },
        amplifier: {
          value: 0.4,
          min: 0,
          max: 5,
          step: 0.01,
        },
        // curve: {
        //   value: (cardsLength / this.amplifier) * 0.033333333,
        //   min: 0,
        //   max: 5,
        //   step: 0.0001,
        // },
        timeFake: {
          value: Math.PI * 1.5,
          min: 0,
          max: 5,
          step: 0.0001,
        },
      }),
      Others: folder({
        segments: {
          value: 20,
          min: 1,
          max: 50,
          step: 1,
        },
      }),
    }
  );

  const curve = (cardsLength / amplifier) * 0.033333333;

  useFrame(({ clock }, deltaTime) => {
    // shaderCard.current.uTime = clock.getElapsedTime();
  });

  const ShaderCard = shaderMaterial(
    {
      uTime: 0,
      uAmplifier: amplifier,
      uCurve: curve,
      uTimeFake: timeFake,
    },
    vertexShader,
    fragmentShader
  );
  extend({ ShaderCard });

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

      <group>
        {texture.map((texture, i) => {
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
    </>
  );
};

export default Experience;
