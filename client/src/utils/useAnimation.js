import { useState, useEffect } from "react";

export function useAnimation(isMounted) {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (isMounted) {
      setCompleted(true);
    }
  }, [isMounted]);

  const shouldRender = isMounted || completed;
  const animateTrigger = isMounted && completed;

  const handleTransition = () => {
    if (!isMounted) {
      setCompleted(false);
    }
  };

  return [shouldRender, animateTrigger, handleTransition];
}
