"use server";

import prisma from "./lib/db";
import { requireUser } from "./lib/hooks";

export async function OnboardingAction(formData: FormData) {
  const session = await requireUser();
  const data = await prisma.user.update({
    where: {
      id: session.user?.id,
    },
    data: {
      userName: "adasas",
      name: "asadasdas",
    },
  });
}
