import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

async function seed() {
  const { db } = await import("./index");
  const { projects } = await import("./schema");
  await db
    .insert(projects)
    .values([
      {
        slug: "kawaii-count",
        title: "Kawaii Count",
        year: 2025,
        summary: "Kawaii Count is a cheerful, Hello Kitty inspired restaurant inventory and sales management system designed specifically for cafes and coffee shops.",
      },
      {
        slug: "jose-rizal-website",
        title: "Jose Rizal Website",
        year: 2026,
        summary: "The Jose Rizal Website was created for our Rizal Life project, based on the official Jose Rizal website and is a self-sustaining, non-profit, and non-partisan project.",
      },
      {
        slug: "love-from-below",
        title: "Love From Below",
        year: 2025,
        summary: "Love From Below is a little 2D Game made in Java to learn more about the Swing functionality and game development in general.",
      },
      {
        slug: "five-night",
        title: "Five Nights at iACADEMY",
        year: 2026,
        summary: "Five Nights at iACADEMY is a 2D Game horror made in Java for my finals project in Java Enterprise Programming.",
      },
    ])
    .onConflictDoNothing();
  console.log("Seeded projects");
  process.exit(0);
}

seed();