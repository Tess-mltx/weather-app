export function randomColorLight() {
  let h = Math.floor(Math.random() * 360);
  let colorLight = `hsl(${h}, 60%, 85%)`;
  return colorLight;
}
