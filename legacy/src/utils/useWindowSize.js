import React, { useEffect, useState } from "react";

export const useWindowSize = (callback) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth > 767) {
        callback(false);
      }
    };
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return innerWidth;
};
