import { loadData } from "../api";

export async function getUpdates() {
  const updates = await loadData("updates");
  return updates;
}
