export const transformSpacesToHypen = (text: string): string =>
  text.trim().toLowerCase().replace(/\s+/g, "-");

// Function to extract product ID from the slug
export const extractProductId = (slug: string): string => {
  const parts = slug.split("-"); // Split by hyphen
  const productId = parts[parts.length - 1]; // Get the last part (assumed to be the ID)
  return productId;
};

export const removeLastHyphenAndText = (str: string): string => {
  const lastHyphenIndex = str.lastIndexOf("-"); // Find the last hyphen
  if (lastHyphenIndex === -1) return str; // If no hyphen is found, return the original string
  return str.substring(0, lastHyphenIndex); // Return the string up to the last hyphen
};
