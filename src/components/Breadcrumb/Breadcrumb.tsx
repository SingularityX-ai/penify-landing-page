import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import patternLeft from "public/images/breadcrumb/pattern_left_bg.png";
import patternRight from "public/images/breadcrumb/pattern_right_bg.png";

interface PathExtractorType {
  [key: string]: string;
}

interface BreadcrumbProps {
  title: string;
}

export function Breadcrumb({ title }: BreadcrumbProps) {
  const router = useRouter();
  const paths = router.asPath.split("/").filter((path) => path);

  const pathExtractor: PathExtractorType = {
    "support-page": "Contact Us",
  };

  return (
    <div className="bg-breadcrumbPatternBg relative w-full bg-cover bg-no-repeat py-24">
      <div className="container mx-auto px-4">
        <h1 className="mb-4 text-center text-2xl font-bold text-slate-200 md:mb-6 md:text-3xl lg:text-4xl">
          {title}
        </h1>

        <nav className="flex w-full items-center justify-center overflow-x-auto whitespace-nowrap">
          <ol className="inline-flex items-center">
            <li>
              <Link
                href="/"
                className="text-sm font-medium text-slate-200 hover:text-blue-700 md:text-base xl:text-lg"
              >
                Home
              </Link>
            </li>

            {paths.map((path, pathIndex) => {
              const href = `/${paths.slice(0, pathIndex + 1).join("/")}`;
              const isLast = pathIndex === paths.length - 1;

              return (
                <li className="flex items-center" key={`path-${pathIndex}`}>
                  <span className="mx-2 text-slate-200">/</span>

                  {isLast ? (
                    <span className="text-sm font-medium text-slate-200 md:text-base xl:text-lg">
                      {pathExtractor[path] || path}
                    </span>
                  ) : (
                    <Link
                      href={href}
                      className="text-sm font-medium text-slate-200 hover:text-blue-700 md:text-base xl:text-lg"
                    >
                      {pathExtractor[path] || path}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>

      <Image
        src={patternLeft}
        loading="lazy"
        alt="left pattern background"
        className="animate-footer-pulse absolute left-0 top-4 hidden md:inline-block xl:top-6"
      />
      <Image
        src={patternRight}
        loading="lazy"
        alt="right pattern background"
        className="animate-footer-pulse-reversed absolute bottom-4 right-0 hidden md:inline-block xl:bottom-6"
      />
    </div>
  );
}
