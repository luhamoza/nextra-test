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
    const cleanPath = asPath.split(/[?#]/)[0];

    let pageTitle = "My Project Documentation";
    let fullTitle = pageTitle;

    if (cleanPath === "/another") {
      pageTitle = "Another Page";
    } else if (cleanPath === "/advanced") {
      pageTitle = "Advanced";
    } else if (cleanPath !== "/" && cleanPath.length > 1) {
      pageTitle =
        cleanPath
          .split("/")
          .pop()
          ?.split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ") || "My Project Documentation";
    }

    if (cleanPath !== "/") {
      fullTitle = `${pageTitle} - My Project Documentation`;
    }

    return {
      title: pageTitle,
      titleTemplate: "%s - My Project Documentation",
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
};

export default config;
