export function getRndInteger(min: number, max: number) {
  // Math.floor(Math.random() * 100) + 20
  return Math.floor(Math.random() * (max - min) ) + min;
}