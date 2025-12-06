import { Metadata } from "next";
import { siteConfig } from "./site";

export const formatDate = (date: string) => {
  const newDate = new Date(date);

  const month = newDate.toLocaleString("en-US", { month: "2-digit" });
  const year = newDate.getFullYear();

  return { month, year };
};
const baseUrl = "http://localhost:3000";

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    keywords: [
      "Full Stack Developer",
      "React Developer",
      "Next Developer",
      "Portfolio",
      "Projects",
      "Skills",
    ],
    authors: [
      {
        name: "MoRamez",
      },
    ],
    creator: "MoRamez",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title,
      description,
      siteName: title,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@MoRamez_type",
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    manifest: `${siteConfig.url}/site.webmanifest`,
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
