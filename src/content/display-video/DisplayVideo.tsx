import { Box } from "@mui/material";
import VideoPlayer from "@components/VideoPlayer/VideoPlayer";

import { welcomeVideoStyle } from "./style";

type WelcomeVideoProps = {
  welcomeVideo: any;
};

const WelcomeVideo = ({ welcomeVideo }: WelcomeVideoProps) => {
  let welcomeVideoLink = "";
  if (welcomeVideo && welcomeVideo[0] && welcomeVideo[0].link) {
    welcomeVideoLink = welcomeVideo[0].link;
  }

  return (
    <Box sx={welcomeVideoStyle}>
      <VideoPlayer src={welcomeVideoLink} />
    </Box>
  );
};

export default WelcomeVideo;
