import Image from "next/image";
import { AuthModal } from "./AuthModal";
import HeroImage from "@/public/better.png";
import { HeroBgSvg } from "./HeroBgSvg";

export function Hero() {
  return (
    <section className="relatibe flex flex-col items-center justify-center py-12 lg:py-20">
      <div className="text-center">
        <span className="text-sm text-primary font-medium tracking-tight bg-primary/10 px-4 py-2 rounded-full">
          Introducting CalSentinel
        </span>

        <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-none">
          Scheduling made{" "}
          <span className="block text-primary -mt-2">super easy</span>
        </h1>

        <p className="max-w-xl mx-auto mt-8 lg:text-lg text-muted-foreground">
          Scheduling a meeting can be a pain. But we at CalSentinel make it easy
          for your clients to schedule meetings with you.
        </p>

        <div className="mt-5 mb-12">
          <AuthModal />
        </div>
      </div>

      <div className="relative items-center w-full py-12 mx-auto mt-12">
        <HeroBgSvg />
        <Image
          src={HeroImage}
          alt="Hero Image"
          className="relative object-cover w-full border rounded-lg shadow-2xl lg:rounded-2xl"
        />
      </div>
    </section>
  );
}
