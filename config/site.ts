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
      href: "/catalog",
    },
    {
      label: "Brands",
      href: "/brands",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Catalog",
      href: "/catalog",
    },
    {
      label: "Brands",
      href: "/brands",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
