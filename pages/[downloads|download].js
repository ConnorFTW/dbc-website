import { ArrowLeftIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Link from "next/link";
import { isDesktop, isMacOs, isWindows } from "react-device-detect";
import Button from "../components/Button";

export default function DownloadPage() {
  console.log({ isDesktop, isMacOs, isWindows });
  const platforms = [
    {
      name: "Windows",
      active: isWindows,
      url: "https://github.com/Michael55555/discord-bot-creator/releases/download/v0.0.1-alpha/dbc_v0.0.1-alpha.zip",
    },
    {
      name: "Mac OS",
      active: isMacOs,
      url: "",
    },
    {
      name: "Linux",
      active: isDesktop && !isMacOs && !isWindows,
      url: "",
    },
  ];
  return (
    <div className="w-full min-h-screen pt-20 text-gray-300 bg-black">
      <div className="mx-auto max-w-7xl">
        <Head>
          <title>Downloads - Discord Bot Creator</title>
        </Head>
        <h1 className="flex items-center gap-4 mb-10 text-4xl font-bold">
          <Link href="/">
            <ArrowLeftIcon className="inline w-8 cursor-pointer" />
          </Link>
          Downloads
        </h1>
        <div className="grid grid-flow-col gap-4">
          {platforms.map((platform) => (
            <div
              className={
                "border-2 rounded-xl p-4 " +
                (platform.active ? "border-blue-700" : "border-gray-800")
              }
            >
              <h2 className="mb-3 text-3xl font-semibold">{platform.name}</h2>
              <p className="mb-5 text-lg">
                Use Discord Bot Creator on {platform.name}
              </p>
              <Link href={platform.url}>
                <Button disabled={!platform.url}>Download</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
