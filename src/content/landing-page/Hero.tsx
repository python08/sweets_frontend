import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { color } from "@global/colors";

import logo from "../../../public/assests/logo.svg";

type HeroType = {
  lgDown: boolean;
};

const Hero = ({ lgDown }: HeroType) => (
  <Box position="relative" height="50vh">
    <Box p={lgDown ? "2rem 1rem 0rem" : "4rem"}>
      <Box>
        <Image
          src={logo.src}
          alt="swad_gharana"
          layout="responsive"
          height={260}
          width={470}
        />
      </Box>
      <Box mt="1rem" ml="1rem">
        <Typography
          variant="h1"
          fontSize={lgDown ? "1rem" : "1.3rem"}
          fontWeight={200}
          lineHeight={1}
          color={lgDown ? color.main.pureWhite : color.main.primary}
        >
          By SMD Mahila Gruh Udyog.
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default Hero;
