import { useRouter } from "next/router";
import { Link, animateScroll as scroll } from "react-scroll";

interface ScrollerProps {
  id: string;
  title: string;
}

export function Scroller({ id, title }: ScrollerProps) {
  const router = useRouter();

  const handleClick = (id: string) => {
    if (router.pathname !== "/") {
      router.push("/").then(() => {
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            const yCoordinate =
              element.getBoundingClientRect().top + window.scrollY;
            scroll.scrollTo(yCoordinate, {
              duration: 800,
              delay: 0,
              smooth: "easeInOutQuart",
            });
          }
        }, 100);
      });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const yCoordinate =
          element.getBoundingClientRect().top + window.pageYOffset;
        scroll.scrollTo(yCoordinate, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      }
    }
  };

  return (
    <Link
      to={id}
      spy={true}
      smooth={true}
      duration={500}
      onClick={() => handleClick(id)}
      className="block rounded px-3 py-2 hover:bg-gray-200 lg:bg-transparent hover:bg-transparent lg:p-0 lg:text-gray-900 hover:lg:text-blue-700 capitalize transition-colors ease-in duration-150 cursor-pointer"
    >
      {title}
    </Link>
  );
}
