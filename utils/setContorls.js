import { useControls, folder } from "leva";

export default function setControls() {
  const controls = useControls("Card", {
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
        value: 1.7,
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
  });

  return controls;
}
