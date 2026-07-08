import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  slug?: string;
  image?: string;
  noIndex?: boolean;
}

const SITE_NAME = "Palm Manor Lonavala";
const SITE_URL = "https://palmmanorlonavala.in";

export default function SEO({
  title,
  description,
  keywords,
  slug = "",
  image = "/images/seo/default-og.jpg",
  noIndex = false,
}: SEOProps) {

  const canonicalUrl = `${SITE_URL}${slug}`;
  const fullTitle = title.includes("Palm Manor")
    ? title
    : `${title} | ${SITE_NAME}`;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{fullTitle}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />

      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${SITE_URL}${image}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${image}`} />

      {/* Theme */}
      <meta name="theme-color" content="#111111" />
    </Helmet>
  );
}