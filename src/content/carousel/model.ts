export interface SliderCardData {
  updateTitle: string;
  updateDescription: string;
  image?: string;
}

export type UpdatesCarouselProps = {
  sliderData: SliderCardData[];
};
