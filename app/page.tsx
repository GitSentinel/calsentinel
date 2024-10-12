import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { auth } from "./lib/auth";
import { redirect } from "next/navigation";
import { Hero } from "./components/Hero";
import { Logos } from "./components/Logos";
import { Features } from "./components/Features";
import { Testimonials } from "./components/Testimonials";
import { CTA } from "./components/Cta";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    return redirect("/dashboard");
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  );
}
