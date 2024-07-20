import Image, { StaticImageData } from "next/image";
import { useCarousel } from "@common/hooks/UseCarousel";
import { Box } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import slide_one from "public/assests/slideshow/slide_one.jpg";
import slide_two from "public/assests/slideshow/slide_two.jpg";

import { MainCarouselStyle } from "./style";

const MainCarousel = () => {
  const images: StaticImageData[] = [slide_one, slide_two];

  const { current, handler, prevSlide, nextSlide } = useCarousel(images.length);

  return (
    <Box sx={MainCarouselStyle.SliderContainer} {...handler}>
      <Box sx={MainCarouselStyle.LeftArrow}>
        <KeyboardArrowLeftIcon
          fontSize="large"
          onClick={prevSlide}
          sx={{ color: "#E3E5E7" }}
        />
      </Box>
      <Box sx={MainCarouselStyle.RightArrow}>
        <KeyboardArrowRightIcon
          fontSize="large"
          onClick={nextSlide}
          sx={{ color: "#E3E5E7" }}
        />
      </Box>
      {/* eslint-disable */}
      {images.map((image, index: number) => (
        <Box>
          <Box
            sx={
              index === current
                ? MainCarouselStyle.SlideActive
                : MainCarouselStyle.Slide
            }
            key={index}
          >
            {index === current && (
              <Image
                alt={`slide_${index}`}
                src={image}
                style={{
                  height: "auto",
                  width: "100%",
                }}
              />
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default MainCarousel;
