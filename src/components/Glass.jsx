import { MeshTransmissionMaterial } from "@react-three/drei";
import { useControls, folder } from "leva";
import * as THREE from "three";

export default function Glass() {
  const controls = useControls("Lens", {
    Material: folder({
      transmission: {
        min: 0,
        max: 1,
        step: 0.001,
        value: 0.65,
      },
      thickness: {
        min: 0,
        max: 1,
        step: 0.001,
        value: 0.6,
      },
      roughness: {
        min: 0,
        max: 1,
        step: 0.001,
        value: 0,
      },
      chromaticAberration: {
        min: 0,
        max: 1,
        step: 0.001,
        value: 0.1,
      },
      anisotropicBlur: {
        min: 0,
        max: 1,
        step: 0.001,
        value: 0.1,
      },
      distortion: {
        min: 0,
        max: 1,
        step: 0.001,
        value: 0,
      },
      distortionScale: {
        min: 0,
        max: 1,
        step: 0.001,
        value: 0.5,
      },
      temporalDistortion: {
        min: 0,
        max: 1,
        step: 0.001,
        value: 0,
      },
      transmissionSampler: false,
      backside: false,
      samples: {
        min: 1,
        max: 10,
        step: 1,
        value: 2,
      },
      ior: {
        min: 0,
        max: 3,
        step: 0.001,
        value: 1,
      },
      anisotropy: {
        min: 0,
        max: 1,
        step: 0.001,
        value: 0,
      },
    }),
    Ring: folder({
      innerRadius: {
        min: 0,
        max: 1,
        step: 0.001,
        value: 0.75,
      },
      outerRadius: {
        min: 0,
        max: 10,
        step: 0.001,
        value: 5,
      },
      thetaSegments: {
        min: 0,
        max: 150,
        step: 1,
        value: 120,
      },
    }),
  });
  return (
    <>
      <mesh>
        <MeshTransmissionMaterial {...controls} />
        {/* <planeGeometry args={[1, 1.4, 1, 1]} /> */}
        <ringGeometry args={[controls.innerRadius, controls.outerRadius, controls.thetaSegments]} />
      </mesh>
    </>
  );
}
