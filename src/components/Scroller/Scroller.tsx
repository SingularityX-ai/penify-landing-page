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
              duration: 200,
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
          duration: 200,
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
      className="block cursor-pointer rounded px-3 py-2 text-sm capitalize text-gray-800 transition-colors duration-150 ease-in hover:bg-gray-200 hover:text-blue-700 md:text-base lg:text-lg lg:bg-transparent lg:p-0 lg:text-white lg:hover:bg-transparent hover:lg:text-blue-700"
    >
      {title}
    </Link>
  );
}
