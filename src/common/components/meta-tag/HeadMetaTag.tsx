import Head from "next/head";

type HeadMetaTagProps = {
  name: string;
  description: string;
  image: string;
  url: string;
};

const HeadMetaTag = ({ name, description, image, url }: HeadMetaTagProps) => (
  <Head>
    <title>{name}</title>
    <meta name="description" content={description} />
    <meta
      name="keywords"
      content={`${name} Indian sweets, homemade sweets, online sweet shop, authentic Indian desserts, traditional Indian sweets, Indian mithai, handcrafted Indian desserts, sweet treats`}
    />

    <meta property="og:title" content={name} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content="product" />
    <meta name="twitter:card" content={image} />
    <link rel="canonical" href={url} />

    <meta name="twitter:card" content={image} />
    <meta property="twitter:url" content={url} />
    <meta name="twitter:title" content={`${name} - Sweets Shop`} />
    <meta name="twitter:description" content={description} />
  </Head>
);

export default HeadMetaTag;
