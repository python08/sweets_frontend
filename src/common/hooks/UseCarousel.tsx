"use client";

import { useEffect, useState } from "react";

export const useCarousel = (length: number) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 9000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });
  // FP find react swipeable alternative
  const handler = () => ({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
  });

  return { handler, current, prevSlide, nextSlide };
};
