import { IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface DropwdownProps {
  title: string;
  items:
    | {
        title: string;
        href: string;
      }[]
    | null;
  type: string;
}

export function Dropwdown({ title, items, type }: DropwdownProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [shouldMenuRender, setShouldMenuRender] = useState<boolean>(false);

  useEffect(() => {
    if (isMenuOpen) {
      setShouldMenuRender(true);
    } else {
      const timeoutId = setTimeout(() => setShouldMenuRender(false), 200);
      return () => clearTimeout(timeoutId);
    }
  }, [isMenuOpen]);

  return (
    <>
      <button
        type="button"
        className={`flex w-full items-center justify-between px-3 py-2 text-sm text-gray-800 transition-all duration-200 ease-in hover:bg-gray-200 hover:text-blue-600 md:text-base lg:w-auto lg:border-0 lg:p-0 lg:text-lg lg:text-white lg:hover:bg-transparent lg:hover:text-blue-400 ${
          isMenuOpen
            ? "bg-gray-200 lg:bg-transparent lg:text-blue-400"
            : "bg-transparent lg:text-white"
        }`}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {title}
        <span
          className={`${
            isMenuOpen ? "rotate-180" : "rotate-0"
          } transition-transform`}
        >
          <IconChevronDown />
        </span>
      </button>

      <div
        className={`${
          isMenuOpen
            ? "my-2 translate-y-0 opacity-100 duration-300 ease-out"
            : "-translate-y-2 opacity-0 duration-200 ease-in"
        } z-10 w-full transform divide-y divide-gray-100 rounded-lg bg-white font-normal shadow lg:absolute`}
      >
        <ul
          className={`py-2 text-sm font-medium ${
            shouldMenuRender ? "block" : "hidden"
          }`}
        >
          {items &&
            items.map(({ title, href }, itemIndex) => (
              <li key={`dropdown-${type}-${itemIndex}`}>
                <Link
                  href={href}
                  className="block rounded px-3 py-2 capitalize text-gray-800 transition-colors duration-150 ease-in hover:bg-gray-200 hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
