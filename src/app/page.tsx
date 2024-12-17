"use client";

import Image from "next/image";
import ChromeAIOverview from "./ChromeAIOverview";
import OrangeDayDemo from "./OrangeDayDemo";
import ChromeDevToolsAIAssistance from "./ChromeDevToolsAIAssistance";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[var(--font-geist-sans)] relative">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-3xl">
        <Image
          className="dark:invert"
          src="/zeller-logo-icon.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <OrangeDayDemo />
        <ChromeAIOverview />
        <ChromeDevToolsAIAssistance />
      </main>
    </div>
  );
}
