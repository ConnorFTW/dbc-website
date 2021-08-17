import Head from "next/head";
import { LightningBoltIcon } from "@heroicons/react/solid";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 dark:bg-black dark:text-gray-500">
      <Head>
        <title>Discord Bot Creator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h2 className="text-5xl font-semibold dark:text-gray-500 mb-3">
          Discord Bot Creator
        </h2>

        <p className="mt-3 text-xl">
          Get started by downloading{" "}
          <a className="bg-blue-700 hover:bg-blue-600 rounded-md p-2 pt-1 text-white">
            our program
          </a>
        </p>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold">Modules</h3>
          {/* Create the cards for with the three titles from above plus some additional content */}
          <div className="border p-5 rounded-xl border-gray-500 text-left">
            <h4 className="text-xl font-semibold mb-2">Welcome Module</h4>
            <p>
              Greets the user when they join the server and gives them a role.
            </p>
          </div>
          <div>
            <h4>Moderation</h4>
            <p>
              Manages the server and gives users special roles and permissions.
            </p>
          </div>
          <div>
            <h4>Leveling System</h4>
            <p>Manages the user's experience and level.</p>
          </div>
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
