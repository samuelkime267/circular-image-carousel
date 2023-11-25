uniform float uTime;
uniform float uIncDegree;
uniform vec3 uColor;
uniform float uCardsLength;
uniform float uIndex;
uniform float uAmplifier;
uniform float uCurve;
uniform float uTimeFake;

varying vec2 vUv;
varying vec3 vPosition;
uniform vec2 pixels;
float PI = 3.141592653589793238;
void main() {
  vUv = uv;

  vec3 pos = position;

  pos.z += sin(pos.x * uCurve + uTimeFake) * uAmplifier;

  vec4 modelPosition = modelMatrix * vec4(pos, 1.0);

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;
  gl_Position = projectedPosition;

}