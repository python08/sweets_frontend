import { Box, Typography } from "@mui/material";
import { fallBackStyle } from "../styles/style";

const FallBack = () => (
  <Box sx={fallBackStyle.WipBg}>
    <Box component="div" sx={fallBackStyle.container} id="header">
      <Box sx={fallBackStyle.title}>
        <Box>
          <Typography variant="h2" component="h1">
            Oops.. sorry for the inconvenience something went wrong...
          </Typography>
        </Box>
        <Box>
          <Typography variant="h2" component="h1">
            please try reloading page.
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default FallBack;
