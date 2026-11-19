import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "OpenSmartFridge",
  tagline:
    "Produkte verwalten, Ablaufdaten im Blick behalten und Rezepte generieren",
  favicon: "img/opensmartfridge-logo.png",

  future: {
    v4: true,
  },

  url: "https://opensmartfridge.de",
  baseUrl: "/",

  organizationName: "opensmartfridge",
  projectName: "docs",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "de",
    locales: ["de"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/opensmartfridge/docs/edit/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "OpenSmartFridge",
      logo: {
        alt: "OpenSmartFridge",
        src: "img/opensmartfridge-logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docs",
          position: "left",
          label: "Dokumentation",
        },
        {
          href: "https://github.com/opensmartfridge/docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Übersicht",
              to: "/docs/intro",
            },
            {
              label: "Installation",
              to: "/docs/installation",
            },
          ],
        },
        {
          title: "Projekt",
          items: [
            {
              label: "GitHub Repository",
              href: "https://github.com/opensmartfridge/server",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Mobile App",
              href: "https://github.com/opensmartfridge/mobile",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OpenSmartFridge. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
