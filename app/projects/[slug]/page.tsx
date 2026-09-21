import { Breadcrumbs } from "@/components/breadcrumbs";
import { fetchProject } from "@/lib/api";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export default async function Project({params}: Props) {
  const { slug } = await params;
  
  let project;
  try {
    project = await fetchProject(slug);
  } catch (e) {
    if (e instanceof Error && e.message === "404") notFound();
    throw e;
  }
  
  return (
    <main className="px-16 py-8">
      <Breadcrumbs 
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title }
        ]} 
      />
      <h1 className="font-serif text-6xl font-bold">{project.title}</h1>
      <p className="mt-2 text-neutral-500">{project.year}</p>
      <p className="mt-6 text-xl">{project.summary}</p>
    </main>
  )
}