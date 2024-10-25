import { CloudRain, FastForward, Rocket, ShieldCheck } from "lucide-react";

const features = [
  {
    name: "Sign up for free",
    description: "Sign up for free and start scheduling meetings in minutes.",
    icon: CloudRain,
  },
  {
    name: "Blazing fast",
    description:
      "Schedule meetings in minutes. We make it easy for you to schedule meetings.",
    icon: FastForward,
  },
  {
    name: "Super secure and protected",
    description: "Your meetings are always secure and protected.",
    icon: ShieldCheck,
  },
  {
    name: "Easy to use",
    description:
      "Our platform is very easy to use. You can schedule meetings in minutes.",
    icon: Rocket,
  },
];

export function Features() {
  return (
    <div className="py-24">
      <div className="max-w-2xl mx-auto lg:text-center">
        <p className="font-semibold leading-7 text-primary">Schedule faster</p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Schdule meetings in minutes!
        </h1>

        <p className="mt-6 text-base leading-snug text-muted-foreground">
          With CalSentinel you can schedule meetings in minutes. We make it easy
          for you to schedule meetings. The meetings are very fast and easy to
          schedule.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <div className="grid max-w-xl gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <div className="text-base font-medium leading-7">
                <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-primary">
                  <feature.icon className="size-6 text-white" />
                </div>
                {feature.name}
              </div>

              <p className="mt-2 text-muted-foreground leading-snug">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
