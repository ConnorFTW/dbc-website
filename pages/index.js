import Head from "next/head";
import { LightningBoltIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Button from "../components/Button";

const list = [
  {
    title: "Welcome Module",
    description:
      "Greets the user when they join the server and gives them a role.",
  },
  {
    title: "Moderation",
    description:
      "Manages the server and gives users special roles and permissions.",
  },
  {
    title: "Leveling System",
    description: "Manages the user's experience and level.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-black dark:text-gray-500">
      <Head>
        <title>Discord Bot Creator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="border-b-2 border-gray-700 w-full p-3">
        <h4 className="font-semibold text-xl text-gray-200">DBC</h4>
      </div>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h2 className="text-5xl font-semibold dark:text-gray-300 mb-3">
          Discord Bot Creator
        </h2>

        <p className="mt-3 text-xl">
          Get started by downloading <Button>our program</Button>
        </p>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold dark:text-white mb-3">
            Modules
          </h3>
          {/* Create the cards for with the three titles from above plus some additional content */}
          {list.map((item) => (
            <div className="p-5 rounded-xl text-left mb-4 transition hover:bg-gray-800 dark:bg-gray-900">
              <h4 className="text-xl font-semibold mb-2 dark:text-gray-200">
                {item.title}
              </h4>
              <p>{item.description}</p>
            </div>
          ))}
          <Link href="/hubs/modules">
            <button className="bg-blue-700 px-5 py-3 text-white text-lg rounded-lg font-semibold hover:bg-blue-800 active:bg-blue-900">
              See more
            </button>
          </Link>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t dark:border-gray-600">
        <a
          className="flex items-center justify-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LightningBoltIcon className="w-4 mr-1 text-blue-600 transition-all hover:text-blue-400" />
          Powered by Discord Bot Creator
        </a>
      </footer>
    </div>
  );
}
