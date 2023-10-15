import { useRef } from "react";

/** custom hooks for debouncing callback
 @callback : callback,
 @delay : ms 

 @returns debouncedCallback
*/

export function useDebounce(
  callback: (...args: any[]) => void,
  delay: number
): (...args: any[]) => void {
  const timer = useRef<NodeJS.Timeout>();

  let isCalled = false;

  const debouncedCallback = (...args: any[]) => {
    if (!isCalled && !timer.current) {
      isCalled = true;
      callback(...args);
      timer.current = setTimeout(() => {
        isCalled = false;
        clearTimeout(timer.current);
        timer.current = undefined;
      }, delay);
      return;
    } else {
      if (timer.current) {
        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
          isCalled = false;
          timer.current = undefined;
        }, delay);
      }
      return;
    }
  };

  return debouncedCallback;
}
