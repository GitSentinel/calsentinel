import { redirect } from "next/navigation";
import { auth, signIn } from "./auth";

export async function requireUser() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/");
  }

  return session;
}

export async function signInWithGoogle() {
  "use server";
  await signIn("google");
}

export async function signInWithGitHub() {
  "use server";
  await signIn("github");
}
