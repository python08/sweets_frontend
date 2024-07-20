import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

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

  const handler = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
  });

  return { handler, current, prevSlide, nextSlide };
};
