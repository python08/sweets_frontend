import { loadData } from "../api";

export async function getWelcomeVideo() {
  const welcomeVideo = await loadData("welcomeVideo");
  return welcomeVideo;
}
