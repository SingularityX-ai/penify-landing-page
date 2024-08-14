interface SubMenuTypes {
  title: string;
  href: string;
}

interface MenuTypes {
  title: string;
  href: string | null;
  children: null | SubMenuTypes[];
}

export const menus: MenuTypes[] = [
  {
    title: "Features",
    href: "/features",
    children: null,
  },
  {
    title: "Pricing",
    href: "/pricing",
    children: null,
  },
  {
    title: "How it works?",
    href: "/how-it-works",
    children: null,
  },
  {
    title: "Resources",
    href: null,
    children: [
      {
        title: "Docs",
        href: "https://docs.penify.dev/",
      },
      {
        title: "Blogs",
        href: "https://blogs.penify.dev",
      },
    ],
  },
  {
    title: "why us?",
    href: "/about-us",
    children: null,
  },
  {
    title: "Support",
    href: "/support-page",
    children: null,
  },
];
