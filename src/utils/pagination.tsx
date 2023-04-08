export function createNumArray(initialNum: number, length?: number): number[] {
  return length && length <= 10
    ? Array.from(Array(initialNum + 10).keys())
    : Array.from(Array(10).keys());
}
