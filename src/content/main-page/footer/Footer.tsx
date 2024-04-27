import Link from "next/link";
import { Box, Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { fontWeight } from "@global/font";
import { color } from "@global/colors";
import { webkitTapHighlightColor } from "@global/global.style";

import { style } from "./style";

const Footer = () => (
  <Box sx={style.container}>
    <Grid container>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Box sx={style.aboutus}>
          <Box>
            <Typography
              variant="subtitle2"
              component="p"
              fontWeight={fontWeight[0]}
              color={color.main.pureWhite}
            >
              SMD mahila gruh udyog is small local business owner. We sell
              delicious homemade and also wholesale food products at affordable
              price as per orders.
            </Typography>
          </Box>
          <Box sx={style.shareLinks}>
            <FacebookIcon />
            <Link
              style={{
                color: color.main.pureWhite,
                ...webkitTapHighlightColor,
              }}
              href="https://www.google.com/search?q=smd+mahila+gruh+udyog+kalyan&rlz=1C1CHBF_enIN1080IN1080&oq=sm&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBggCEEUYOzIGCAMQRRg7MgcIBBAAGI8CMgcIBRAAGI8CMgYIBhBFGD0yBggHEEUYPdIBBzczOWowajGoAgCwAgA&sourceid=chrome&ie=UTF-8"
            >
              <GoogleIcon />
            </Link>
          </Box>
        </Box>
      </Grid>
      {/* <Grid item xs={12} sm={12} md={4} lg={4}>
        <Box>
          <Typography component="p">Home</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Box>
          <Typography component="p">About us</Typography>
        </Box>
      </Grid> */}
    </Grid>
  </Box>
);

export default Footer;
