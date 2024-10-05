"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import Google from "@/public/google.svg";
import Github from "@/public/github.svg";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { text } from "stream/consumers";
import { cn } from "@/lib/utils";

interface iAppProps {
  text: string;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
}

export function SubmitButton({ text, variant, className }: iAppProps) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className={cn("w-fit", className)}>
          <Loader2 className="size-4 mr-2 animate-spin" />
          Please Wait
        </Button>
      ) : (
        <Button
          type="submit"
          variant={variant}
          className={cn("w-fit", className)}
        >
          {text}
        </Button>
      )}
    </>
  );
}

export function GoogleAuthButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className="w-full">
          <Loader2 className="size-4 mr-2 animate-spin" />
          Please Wait
        </Button>
      ) : (
        <Button variant="outline" className="w-full">
          <Image src={Google} alt="Google Logo" className="size-4 mr-2" />
          Sign In With Google
        </Button>
      )}
    </>
  );
}

export function GitHubAuthButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className="w-full">
          <Loader2 className="size-4 mr-2 animate-spin" />
          Please Wait
        </Button>
      ) : (
        <Button variant="outline" className="w-full">
          <Image src={Github} alt="GitHub Logo" className="size-4 mr-2" />
          Sign In With GitHub
        </Button>
      )}
    </>
  );
}
