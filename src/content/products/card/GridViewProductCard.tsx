import { useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Box, Card, CardActionArea, SxProps, Theme, Zoom } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { color } from "@global/colors";
import { fontWeight } from "@global/font";
import { useIsVisible } from "@common/hooks/UseIsVisible";
import { productDetailsRoute } from "@common/utils/route";

type ProductCardType = {
  name: string;
  description: string;
  img: any;
  imgHeight: string;
  contentHeight: string;
  productId: string;
  sx?: SxProps<Theme>;
};

const GridViewProductCard = (props: ProductCardType) => {
  const router = useRouter();
  const { name, description, img, sx, productId, imgHeight, contentHeight } =
    props;

  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  const lineHeight = 1;

  const handleNavigate = (id: string) => {
    router.push(productDetailsRoute(name, id, 1));
  };

  return (
    <Card sx={sx} ref={ref}>
      <CardActionArea onClick={() => handleNavigate(productId)}>
        <Zoom in={isVisible}>
          <Box
            sx={{
              position: "relative",
              height: imgHeight,
              opacity: 1,
              overflow: "hidden",
            }}
          >
            <Image
              src={img}
              alt={name}
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Zoom>

        <CardContent sx={{ height: contentHeight }}>
          <Typography
            gutterBottom
            variant="subtitle1"
            component="h1"
            lineHeight={lineHeight}
          >
            {name}
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
