import Body from "@content/main-page/body/Body";
import type { Metadata } from "next";
import { constructMetadata } from "src/utils/constructMetadata";

// Export standard Next.js App Router Metadata here
export const metadata: Metadata = constructMetadata({
  name: "Indian Sweets - Swad Gharana",
  description:
    "Our homemade sweets shop is ready to deliver, order now! Indulge in the Irresistible Charm of Traditional Indian Ladoo Delights!Our homemade sweets shop is ready to deliver, order now! Indulge in the Irresistible Charm of Traditional Indian Ladoo Delights!",
  image: "https://sweettoothbucket.s3.ap-south-1.amazonaws.com/assest/logo.jpg",
  url: `${process.env.NEXT_PUBLIC_DOMAIN}/products`,
});

/* eslint-disable */
const Page = () => {
  return <Body />;
};

export default Page;
