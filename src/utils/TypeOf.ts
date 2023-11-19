export function TypeOf(value: unknown) {
  return Object.prototype.toString
    .call(value)
    .split(' ')[1]
    .slice(0, -1)
    .toLowerCase();
}
