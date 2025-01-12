import { Input } from "@/components/ui/input";
import { GithubRepo } from "./_components/github-repo";
import { LayoutList } from "lucide-react";
import { hooks } from "./_hooks/hookList";
import HookDisplay from "./_components/hook-display";

const repoList = [
  "https://github.com/shadcn-ui/ui",
  "https://github.com/sdorra/content-collections",
  "https://github.com/fuma-nama/fumadocs",
  "https://github.com/pmndrs/zustand",
  "https://github.com/TanStack/query",
  "https://github.com/vercel/swr",
  "https://github.com/vercel/next.js",
  "https://github.com/cloudflare/workers-sdk",
];

export default async function Page() {
  return (
    <div className="flex-grow flex flex-col p-6">
      <p className="font-semibold">Library</p>
      <p className="text-sm text-muted-foreground">
        Here you can find useful repos, hooks, and resources that you can
        utilize in your own projects.
      </p>

      <div className="relative mt-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">
            Github Repos
          </span>
        </div>
      </div>
      <div className="grid mt-5 grid-cols-4 gap-4">
        {repoList.map((link, _idx) => (
          <GithubRepo key={_idx} url={link} />
        ))}
      </div>
      <div className="relative mt-8">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">Hooks</span>
        </div>
      </div>
      <HookDisplay />
      <div className="relative mt-4">
        <div className="absolute left-3 top-1/2 flex -translate-y-1/2 items-center">
          <LayoutList className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />
        </div>
        <Input
          id="name"
          name="name"
          placeholder="Filter by hook name"
          autoComplete="off"
          className="h-9 w-full rounded-lg border border-zinc-200 bg-zinc-50 pl-10 text-zinc-900 placeholder:text-zinc-500 focus:border-zinc-400 focus:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-800/50 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-zinc-700 dark:focus-visible:ring-zinc-700"
        />
      </div>
      {hooks.map((hook, idx) => (
        <div key={idx}>{hook.name}</div>
      ))}
    </div>
  );
}
