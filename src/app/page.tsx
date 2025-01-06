import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex-grow flex items-center flex-col justify-center">
      <div className="font-mono p-3 bg-gray-50 text-xs dark:bg-gray-800 rounded-lg">
        v{process.env.npm_package_version}
      </div>
    </div>
  );
}
