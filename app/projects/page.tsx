import { Breadcrumbs } from "@/components/breadcrumbs";
import { Suspense } from "react";
import { ProjectRows } from "./project-rows";
import { ProjectStats } from "./project-stats";
import { RowsSkeleton, StatsSkeleton } from "./skeletons";

export const dynamic = "force-dynamic";

export default function Projects() {
  return (
    <main className="px-16 py-8">
      <Breadcrumbs 
        items={[
          { label: "Home", href: "/" },
          { label: "Projects" },
        ]} 
      />
      <h1 className="font-serif text-6xl font-bold">Projects</h1>
      <Suspense fallback={<StatsSkeleton />}>
        <ProjectStats />
      </Suspense>
      <Suspense fallback={<RowsSkeleton />}>
        <ProjectRows />
      </Suspense>
    </main>
  );
}