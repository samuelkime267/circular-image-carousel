import { shaderMaterial } from "@react-three/drei";
import fragmentShader from "../shader/fragment.glsl";
import vertexShader from "../shader/vertex.glsl";
import { extend } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Card({
  position,
  rotation,
  segments,
  amplifier,
  curve,
  timeFake,
  texture,
}) {
  const ShaderCard = shaderMaterial(
    {
      uTime: 0,
      uAmplifier: amplifier,
      uCurve: curve,
      uTimeFake: timeFake,
      uTexture: texture,
    },
    vertexShader,
    fragmentShader
  );
  extend({ ShaderCard });

  const shaderCard = useRef();

  useEffect(() => {
    shaderCard.current.uAmplifier = amplifier;
    shaderCard.current.uCurve = curve;
    shaderCard.current.uTimeFake = timeFake;
  }, [amplifier, curve, timeFake]);

  return (
    <group position={position} rotation={rotation}>
      <mesh>
        <shaderCard ref={shaderCard} side={THREE.DoubleSide} />
        <planeGeometry args={[1, 1.4, segments, segments]} />
      </mesh>
    </group>
  );
}
