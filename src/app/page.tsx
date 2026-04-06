import type { Metadata } from "next";
import { constructMetadata } from "src/utils/constructMetadata";

import LandingPage from "./LandingPage";

// Export standard Next.js App Router Metadata here
export const metadata: Metadata = constructMetadata({
  name: "Homemade Ukadiche Modak Besan ladoo - Swad Gharana",
  description: "Welcome to our online sweet shop...",
  image: "https://sweettoothbucket.s3.ap-south-1.amazonaws.com/assest/logo.jpg",
  url: process.env.NEXT_PUBLIC_DOMAIN || "https://swadgharana.in",
});
// Render the client component tree
const Page = () => <LandingPage />;

export default Page;
