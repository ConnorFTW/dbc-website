// Create a 404 page using tailwindcss in darkmode

import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container dark:bg-black h-screen text-white">
      <Head>
        <title>Not Found</title>
      </Head>
      <div className="row py-40">
        <div className="col-md-8 col-md-offset-2 dark:bg-gray">
          <h1 className="text-center text-4xl mb-3">
            4<div className="animate-spin inline-block h-11">0</div>4
          </h1>
          <p className="text-center border-t-2 border-gray-500 mb-4 mx-auto">
            We couldn't find the page you were looking for.
            <br />
            <Link href="/">
              <p className="mt-4 p-4 bg-blue-700 hover:bg-blue-800 active:bg-blue-900 transition">
                Go to Home
              </p>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
