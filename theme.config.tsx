import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "Nextra Docs Template",
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    // Remove query parameters and hash from the path
    const cleanPath = asPath.split(/[?#]/)[0];

    // Default title for all pages
    let pageTitle = "My Project Documentation";

    // Set specific titles for certain pages
    if (cleanPath === "/another") {
      pageTitle = "Another Page";
    } else if (cleanPath === "/advanced") {
      pageTitle = "Advanced";
    } else if (cleanPath !== "/" && cleanPath.length > 1) {
      // For other pages, generate a title based on the URL
      pageTitle =
        cleanPath
          .split("/")
          .pop()
          ?.split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ") || "My Project Documentation";
    }

    // For the index page, use pageTitle as is. For other pages, append the project name
    const fullTitle =
      cleanPath === "/" ? pageTitle : `${pageTitle} - My Project Documentation`;

    return {
      // Use fullTitle for both the browser tab and og:title
      title: fullTitle,
      description:
        "This is a sample project to demonstrate Nextra's capabilities",
      openGraph: {
        title: fullTitle,
        description:
          "This is a sample project to demonstrate Nextra's capabilities",
        type: "website",
        url: `https://example.com${cleanPath}`,
        images: [
          {
            url: "https://example.com/og-image.png",
            alt: "My Project OG Image",
          },
        ],
      },
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="" />
    </>
  ),
};

export default config;
