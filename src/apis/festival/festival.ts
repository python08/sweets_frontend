import { loadData } from "../api";

export async function getAllFestivals() {
  const festivals = await loadData("festivals");
  return festivals;
}
