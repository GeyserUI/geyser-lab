import { labs } from "@/lib/siteConfig";
import { notFound } from "next/navigation";

export default function LabPage({ params }: { params: { labId: string } }) {
  const lab = labs.find((lab) => lab.slug === params.labId);

  if (!lab) {
    notFound();
  }

  return (
    <main className="flex-grow  p-2">
      <div className="w-full h-full flex flex-grow items-center justify-center">
        {lab.component && <lab.component />}
      </div>
    </main>
  );
}
