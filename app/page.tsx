import { Breadcrumbs } from "@/components/breadcrumbs";

export default function Home() {
  return (
    <main className="px-16 py-8">
      <Breadcrumbs items={[{ label: "Home" }]} />
      <h1 className="font-serif text-6xl font-bold">Hello, I&apos;m Dwyane</h1>
      <p className="mt-2 text-neutral-500">Visual Artist / Software Engineer / Graphics Designer</p>
      <p className="mt-6 text-xl">I’m currently a 20 y.o. college student learning the wonderfully volatile life of a software engineer.</p>
    </main>
  );
}