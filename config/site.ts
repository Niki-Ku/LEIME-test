export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + HeroUI Memes",
  description: "Memes test task",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "List",
      href: "/list",
    },
    {
      label: "Table",
      href: "/table",
    },
  ],
  navMenuItems: [
    {
      label: "List",
      href: "/list",
    },
    {
      label: "Table",
      href: "/table",
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
