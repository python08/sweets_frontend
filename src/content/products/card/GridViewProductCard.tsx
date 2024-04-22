import { useRef } from "react";
import { useRouter } from "next/router";
import { Card, CardActionArea, SxProps, Theme, Zoom } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { color } from "@global/colors";
import { fontWeight } from "@global/font";
import { useIsVisible } from "@common/hooks/UseIsVisible";

type ProductCardType = {
  title: string;
  description: string;
  img: any;
  cardMediaHeight: string;
  productId: string;
  sx?: SxProps<Theme>;
};

const GridViewProductCard = (props: ProductCardType) => {
  const router = useRouter();
  const { title, description, img, cardMediaHeight, sx, productId } = props;

  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  const lineHeight = 1;

  const handleNavigate = (id: string) => {
    router.push(`explore/main/product/${id}`);
  };

  return (
    <Card sx={sx} ref={ref}>
      <CardActionArea onClick={() => handleNavigate(productId)}>
        <Zoom in={isVisible}>
          <CardMedia
            component="img"
            height={cardMediaHeight}
            image={img}
            alt={title}
          />
        </Zoom>
        <CardContent sx={{ height: "7rem" }}>
          <Typography
            gutterBottom
            variant="subtitle1"
            component="h1"
            lineHeight={lineHeight}
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle2"
            component="p"
            fontWeight={fontWeight[0]}
            color={color.grey[0]}
            lineHeight={lineHeight}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default GridViewProductCard;
