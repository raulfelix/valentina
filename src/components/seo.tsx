import { graphql, useStaticQuery } from "gatsby";
import React, { ReactNode } from "react";

type Props = {
  title?: string;
  description?: string;
  url?: string;
  customImage?: any;
  pathname?: string;
  children?: ReactNode;
};

export const SEO = ({
  title,
  description,
  customImage,
  pathname,
  url,
  children,
}: Props) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${customImage || image}`,
    url: `${siteUrl}${url ? `/${url}` : pathname || ``}`,
    twitterUsername,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta property="og:url" content={seo.url} />
      <meta name="og:title" content={seo.title} />
      <meta name="og:image" content={seo.image} />

      {children}
    </>
  );
};

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitterUsername
          image
          siteUrl
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
