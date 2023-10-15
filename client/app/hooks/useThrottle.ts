import { useRef } from "react";
/** custom hooks for throttling callback
 @callback : callback,
 @delay : ms 

 @returns throttledCallback
*/

export function useThrottle(
  callback: (...args: any[]) => void,
  delay: number
): (...args: any[]) => void {
  const timer = useRef<NodeJS.Timeout>();

  let isCalled = false;

  const throttledCallback = (...args: any[]) => {
    if (!isCalled && !timer.current) {
      isCalled = true;
      callback(...args);
      timer.current = setTimeout(() => {
        isCalled = false;
        clearTimeout(timer.current);
        timer.current = undefined;
      }, delay);
      return;
    }
  };

  return throttledCallback;
}
