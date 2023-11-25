import { useTexture } from "@react-three/drei";

export default function cardLogic({ amplifier }) {
  const cardsLength = 12;
  const textures = useTexture([...Array(cardsLength)].map((_, i) => `/img/${i + 1}.jpg`));

  const incDegree = (Math.PI * 2) / cardsLength;

  const curve = (cardsLength / amplifier) * 0.033333333;

  return {
    cardsLength,
    textures,
    incDegree,
    curve,
  };
}
