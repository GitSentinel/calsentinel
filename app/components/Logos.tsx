import Image from "next/image";
import NylasLogo from "@/public/nylas-logo.png";
import NextJSLogo from "@/public/nextjs-logo.svg";
import Vercel from "@/public/vercel.svg";
import ShadCn from "@/public/shadcn.png";
import Prisma from "@/public/prisma.svg";

let imageStyle =
  "col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:invert";

export function Logos() {
  return (
    <div className="py-10">
      <h2 className="text-center text-lg font-semibold leading-7">
        Built Using The Best Tech Stack
      </h2>

      <div className="mt-10 grid max-w-lg mx-auto grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:grid-cols-5 lg:mx-0 lg:max-w-none">
        <Image src={NylasLogo} alt="Logo" className={imageStyle} />
        <Image src={NextJSLogo} alt="Logo" className={imageStyle} />
        <Image src={Vercel} alt="Logo" className={imageStyle} />
        <Image src={ShadCn} alt="Logo" className={imageStyle} />
        <Image src={Prisma} alt="Logo" className={imageStyle} />
      </div>
    </div>
  );
}
