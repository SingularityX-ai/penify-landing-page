interface SubMenuTypes {
  title: string;
  href: string;
}

interface MenuTypes {
  title: string;
  href: string | null;
  scroller: boolean;
  children: null | SubMenuTypes[];
}

export const menus: MenuTypes[] = [
  {
    title: "Features",
    href: "/features",
    scroller: true,
    children: null,
  },
  {
    title: "Pricing",
    href: "/pricing",
    scroller: true,
    children: null,
  },
  {
    title: "How it works?",
    href: "/how-it-works",
    scroller: true,
    children: null,
  },
  {
    title: "Resources",
    href: null,
    scroller: false,
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
    title: "About Us",
    href: "/about-us",
    scroller: false,
    children: null,
  },
  {
    title: "Contact Us",
    href: "/contact-us",
    scroller: false,
    children: null,
  },
];
