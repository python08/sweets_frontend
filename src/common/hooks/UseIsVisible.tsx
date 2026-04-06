"use client";

import { useEffect, useState } from "react";

export const useIsVisible = (ref: React.RefObject<HTMLElement | null>) => {
  const [isItersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIsIntersecting(entry.isIntersecting),
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isItersecting;
};
