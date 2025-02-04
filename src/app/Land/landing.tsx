"use client";
import { TypewriterEffectSmooth } from "../component/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
        text: "my",
      },
    {
      text: "Design.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-200 text-md sm:text-base  ">
        Do you like this design by sabahat shakeel
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl portrait:bg-slate-800 bg-black border hover:opacity-80 dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl  bg-white text-black hover:opacity-80 border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
