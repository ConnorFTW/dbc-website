import { LightningBoltIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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

      <div className="w-full p-3 border-b-2 border-gray-700">
        <h4 className="text-xl font-semibold text-gray-200">DBC</h4>
      </div>
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20">
        <div className="grid w-screen grid-flow-col grid-cols-header grid-rows-header max-w-7xl">
          <h2 className="mb-5 text-5xl font-semibold dark:text-gray-300">
            Discord Bot Creator
          </h2>

          <p className="mt-3 mb-20 text-xl">
            Helps people create discord bots easily.
            <br />
            Get started by downloading our program.
          </p>

          <Link href="/downloads">
            <button className="self-start px-5 py-3 text-lg font-semibold text-white bg-blue-700 rounded-lg mt-15 hover:bg-blue-800 active:bg-blue-900">
              Download
            </button>
          </Link>
          <div className="relative row-span-3">
            <Image
              src="https://user-images.githubusercontent.com/30301026/135710086-ccc1bf54-088d-49b4-9aa6-9f6d2dfda84b.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="w-full mt-10 max-w-7xl">
          <h3 className="mb-3 text-2xl font-semibold dark:text-white">
            Modules
          </h3>
          {/* Create the cards for with the three titles from above plus some additional content */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {list.map((item) => (
              <div className="p-5 text-left transition rounded-xl hover:bg-gray-800 dark:bg-gray-900">
                <h4 className="mb-2 text-xl font-semibold dark:text-gray-200">
                  {item.title}
                </h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <Link href="/hubs/modules">
            <button className="px-5 py-3 text-lg font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 active:bg-blue-900">
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
