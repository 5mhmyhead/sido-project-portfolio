import { Breadcrumbs } from "@/components/breadcrumbs";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="px-16 py-8">
      <Breadcrumbs 
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: "404"}
        ]} 
      />
      <h1 className="font-serif text-6xl font-bold">Nothing but crickets!</h1>
      <p className="mt-6 text-xl">This project was removed or does not exist.</p>
      <Link href="/projects" className="mt-6 inline-block underline">
        Back to projects
      </Link>
    </main>
  );
}