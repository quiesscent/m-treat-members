export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "M Treat Membership",
  description: "Membership Form",
  navItems: [
    {
      label: "Home",
      href: "/dashboard",
    },
    {
      label: "Update",
      href: "/update",
    },
    {
      label: "Logout",
      href: "/logout",
    }
],
};
