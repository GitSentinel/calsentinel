import { EditEventForm } from "@/app/components/EditEventTypeForm";
import prisma from "@/app/lib/db";
import { notFound } from "next/navigation";

async function getData(eventTypeId: string) {
  const data = await prisma.eventType.findUnique({
    where: {
      id: eventTypeId,
    },

    select: {
      title: true,
      desciption: true,
      duration: true,
      url: true,
      id: true,
      videoCallSoftware: true,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

export default async function EditRoute({
  params,
}: {
  params: { eventTypeId: string };
}) {
  const data = await getData(params.eventTypeId);

  return (
    <div>
      <EditEventForm
        callProvider={data.videoCallSoftware}
        desciption={data.desciption}
        duration={data.duration}
        id={data.id}
        title={data.title}
        url={data.url}
      />
    </div>
  );
}
