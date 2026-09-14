import { Breadcrumbs } from "@/components/breadcrumbs";
import { getProject } from "@/lib/projects";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export default async function Project({params}: Props) {
  const { slug } = await params;
  const project = await getProject(slug);
  if(!project) notFound();
  
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