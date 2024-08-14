import { IconBrandGithubFilled, IconStarFilled } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface CounterTypes {
  users: number;
  repos: number;
}

export default function Banner() {
  const [counter, setCounter] = useState<CounterTypes>({
    users: 0,
    repos: 0,
  });

  useEffect(() => {
    const getCount = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/v1/analytics/usage/count`
        );
        const { users, repos } = await response.json();
        setCounter({ users, repos });
      } catch (err) {
        console.error("Failed to get response: ", err);
      }
    };

    getCount();
  }, []);

  return (
    <div
      id="marketting-banner"
      tabIndex={-1}
      className="w-full rounded-lg bg-white px-4 py-3 shadow-sm mb-1"
    >
      <div className="container mx-auto">
        <div className="mb-3 me-4 flex flex-col items-center justify-center gap-2 md:gap-4 md:mb-0 md:flex-row">
          <div className="flex sm:items-center gap-x-1">
            <IconStarFilled width={18} color="#ffbc00" />
            <p className="text-sm font-normal text-gray-500">
              Trusted globally by <strong> {counter.users}+ users </strong> and
              Installed on
              <strong> {counter.repos}+ repositories </strong>
            </p>
          </div>

          <Link
            href="https://github.com/apps/penify-dev"
            className="me-2 rounded-lg bg-blue-700 px-5 py-2 text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 flex items-center gap-x-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandGithubFilled width={16} />
            Install on GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
