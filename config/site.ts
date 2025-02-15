export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "EcomApp",
  description: "",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Catalog",
      href: "/catalog/",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Catalog",
      href: "/catalog/",
    },
  ],
  links: {
    github: "https://github.com/",
    twitter: "https://twitter.com",
    docs: "https://heroui.com",
    discord: "https://discord.gg",
    sponsor: "https://patreon.com/",
  },
};
