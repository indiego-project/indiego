import { useEffect, useRef } from "react";

export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  savedCallback.current = callback;

  useEffect(() => {
    const tick = () => {
      console.log("tick is runninng");
      savedCallback.current();
    };

    let intervalId = setInterval(tick, delay);
    return () => {
      clearInterval(intervalId);
    };
  }, [delay]);
};
