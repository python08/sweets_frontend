import { loadData } from "../api";

export async function getUpdates() {
  const welcomeVideo = await loadData("updates");
  return welcomeVideo;
}
