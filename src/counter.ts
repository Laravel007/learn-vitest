export let count = 0;

export function increment(count: number, value = 1) {
  return count + value;
}

export function setCount(nextCount: number) {
  count = nextCount;
}
