import { GithubRepo } from "./_components/github-repo";

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
        utilize in your own projects
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
    </div>
  );
}
