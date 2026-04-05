import { Metadata } from "next";

type HeadMetaTagProps = {
  name: string;
  description: string;
  image: string;
  url: string;
};

export const constructMetadata = ({
  name,
  description,
  image,
  url,
}: HeadMetaTagProps): Metadata => ({
    title: name,
    description,
    keywords: [
      name,
      "Indian sweets",
      "homemade sweets",
      "online sweet shop",
      "authentic Indian desserts",
      "traditional Indian sweets",
      "Indian mithai",
      "handcrafted Indian desserts",
      "sweet treats",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: name,
      description,
      url,
      // Note: "product" is valid but requires specific OpenGraph extensions. "website" is standard.
      type: "website", 
      images: [
        {
          url: image,
          alt: name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image", // Corrected from your original image URL string
      title: `${name} - Sweets Shop`,
      description,
      images: [image],
    },
  });