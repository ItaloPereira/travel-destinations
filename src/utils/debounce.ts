export function debounce<T extends unknown[]>(fn: (...args: T) => void, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: T) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}