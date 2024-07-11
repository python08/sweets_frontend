import { Box } from "@mui/material";
import VideoPlayer from "@components/VideoPlayer/VideoPlayer";

import { welcomeVideoStyle } from "./style";

const WelcomeVideo = () => (
  <Box sx={welcomeVideoStyle}>
    <VideoPlayer src={process.env.NEXT_PUBLIC_WELCOME_VIDEO_URL || ""} />
  </Box>
);

export default WelcomeVideo;
