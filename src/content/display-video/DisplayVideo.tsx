import { Box } from "@mui/material";
import VideoPlayer from "@components/VideoPlayer/VideoPlayer";
import { welcomeVideoUrl } from "src/apis/constant/constant";

import { welcomeVideoStyle } from "./style";

const WelcomeVideo = () => (
  <Box sx={welcomeVideoStyle}>
    <VideoPlayer src={welcomeVideoUrl} />
  </Box>
);

export default WelcomeVideo;
