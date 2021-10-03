import Head from "next/head";

// Create a modules page with tailwindcss in next.js
export default function ModulesPage() {
  const modules = [
    {
      name: "Leveling System",
      description:
        "A leveling system that allows you to level up your skills and get better rewards.",
      tags: ["JSON"],
      commands: [
        { name: "!level", description: "Check your level", config: "" },
      ],
      events: [
        {
          name: "Level Up",
          description: "Increments your points on level up",
          config: "",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col items-center">
      <Head>
        <title>Modules</title>
      </Head>
      <h1 className="text-6xl font-bold text-center">Modules</h1>
      <div className="flex flex-col items-center mt-4">
        <p className="text-3xl font-bold">
          The modules page is currently under construction.
        </p>
        <p className="text-2xl font-bold">Please check back soon.</p>
      </div>
    </div>
  );
}
