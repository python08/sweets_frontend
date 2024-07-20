import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box } from "@mui/material";
import Card from "@components/Card/component/Card";
import { useCarousel } from "@common/hooks/UseCarousel";

import { UpdatesCarouselStyle } from "./style";
import { UpdatesCarouselProps, SliderCardData } from "./model";

const UpdatesCarousel = ({ sliderData }: UpdatesCarouselProps) => {
  const { current, handler, prevSlide, nextSlide } = useCarousel(
    sliderData.length
  );

  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }

  return (
    <Box sx={UpdatesCarouselStyle.SliderContainer} {...handler}>
      <Box sx={UpdatesCarouselStyle.LeftArrow}>
        <KeyboardArrowLeftIcon
          fontSize="large"
          onClick={prevSlide}
          sx={{ color: "#E3E5E7" }}
        />
      </Box>
      <Box sx={UpdatesCarouselStyle.RightArrow}>
        <KeyboardArrowRightIcon
          fontSize="large"
          onClick={nextSlide}
          sx={{ color: "#E3E5E7" }}
        />
      </Box>
      {sliderData.map((data: SliderCardData, index: number) => {
        const { updateTitle, updateDescription, image } = data;
        return (
          <Box
            sx={
              index === current
                ? UpdatesCarouselStyle.SlideActive
                : UpdatesCarouselStyle.Slide
            }
            key={updateTitle}
          >
            {index === current && (
              <Card
                key={updateTitle}
                title={updateTitle}
                description={updateDescription}
                img={image}
                sx={UpdatesCarouselStyle.ProductCard}
                cardMediaHeight="200"
              />
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default UpdatesCarousel;
