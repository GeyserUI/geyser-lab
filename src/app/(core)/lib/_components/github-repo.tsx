import { getRepo } from "@/lib/github";
import { GitFork, Star } from "lucide-react";
import { Link } from "next-view-transitions";
import { Suspense } from "react";

export function GithubRepo({ url }: { url: string }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GithubRepoRSC url={url} />
    </Suspense>
  );
}

async function GithubRepoRSC({ url }: { url: string }) {
  const { description, stargazers_count, forks, owner, name, html_url } =
    await getRepo(url);
  return (
    <div className="rounded-xl border   transition-all hover:border-gray-500 hover:ring-4 hover:ring-gray-200 dark:hover:ring-neutral-800 dark:hover:border-neutral-600">
      <Link
        href={html_url}
        target="_blank"
        rel="noreferrer noopener"
        className="block p-6"
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-2xl font-normal dark:text-muted-foreground">
              {owner.login}/
              <span className="font-bold text-gray-800 dark:text-white">
                {name}
              </span>
            </p>
            <p className="mt-2 text-sm font-normal max-w-md text-gray-500 dark:text-muted-foreground">
              {description}
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="h-8 w-8 sm:h-10 sm:w-10"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
          </svg>
        </div>
        <div className="flex items-end justify-between">
          <div className="mt-4 flex items-center space-x-6">
            <div className="flex items-start space-x-2">
              <Star className="size-4" />
              <div>
                <p className="font-semibold text-gray-600 dark:text-foreground">
                  {stargazers_count}
                </p>
                <p className="text-xs font-normal text-gray-500 dark:text-foreground">
                  Stars
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <GitFork className="size-4" />
              <div>
                <p className="font-semibold text-gray-600 dark:text-foreground">
                  {forks}
                </p>
                <p className="text-xs font-normal text-gray-500 dark:text-foreground">
                  Forks
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
