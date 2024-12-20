"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { useFormState } from "react-dom";
import { createEventTypeAction, EditEventTypeAction } from "../actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { eventTypeSchema } from "../lib/zodSchemas";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ButtonGroup } from "@/components/ui/ButtonGroup";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SubmitButton } from "./SubmitButton";

type VideoCallProvider = "Zoom Meeting" | "Google Meet" | "Microsoft Teams";

interface iAppProps {
  id: string;
  title: string;
  url: string;
  desciption: string;
  duration: number;
  callProvider: string;
}

let editDivStyle = "flex flex-col gap-y-2";

export function EditEventForm({
  callProvider,
  desciption,
  duration,
  id,
  title,
  url,
}: iAppProps) {
  const [activePlatform, setActivePlatform] = useState<VideoCallProvider>(
    callProvider as VideoCallProvider
  );

  const [lastResult, action] = useFormState(EditEventTypeAction, undefined);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: eventTypeSchema,
      });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <div className="w-full h-full flex flex-1 items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Edit Appointment </CardTitle>
          <CardDescription>
            Edit your appointment type that allows people to book your time!
          </CardDescription>
        </CardHeader>

        <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
          <input type="hidden" name="id" value={id} />

          <CardContent className="grid gap-y-5">
            <div className={editDivStyle}>
              <Label>Title</Label>
              <Input
                name={fields.title.name}
                key={fields.title.key}
                defaultValue={title}
                placeholder="30 Minute Meeting"
              />
              <p className="text-red-500 text-sm">{fields.title.errors}</p>
            </div>

            <div className={editDivStyle}>
              <Label>URL Slug</Label>
              <div className="flex rounded-md">
                <span className="inline-flex items-center px-3 rounded-l-md border-r-0 border-muted bg-muted text-sm text-muted-foreground">
                  calsentinel.vercel.app/
                </span>
                <Input
                  name={fields.url.name}
                  key={fields.url.key}
                  defaultValue={url}
                  placeholder="example-url-1"
                  className="rounded-l-none"
                />
              </div>
              <p className="text-red-500 text-sm">{fields.url.errors}</p>
            </div>

            <div className={editDivStyle}>
              <Label>Description</Label>
              <Textarea
                name={fields.description.name}
                key={fields.description.key}
                defaultValue={desciption}
                placeholder="Meet me in this meeting!"
              />
              <p className="text-red-500 text-sm">
                {fields.description.errors}
              </p>
            </div>

            <div className={editDivStyle}>
              <Label>Duration</Label>
              <Select
                name={fields.duration.name}
                key={fields.duration.key}
                defaultValue={String(duration)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Duration</SelectLabel>
                    <SelectItem value="15">15 Mins</SelectItem>
                    <SelectItem value="30">30 Mins</SelectItem>
                    <SelectItem value="45">45 Mins</SelectItem>
                    <SelectItem value="60">1 Hour</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <p className="text-red-500 text-sm">{fields.duration.errors}</p>
            </div>

            <div className={editDivStyle}>
              <Label>Video Call Provider</Label>
              <input
                name={fields.videoCallSoftware.name}
                type="hidden"
                value={activePlatform}
              />
              <ButtonGroup className="flex flex-row">
                <Button
                  type="button"
                  onClick={() => setActivePlatform("Zoom Meeting")}
                  className="w-full"
                  variant={
                    activePlatform === "Zoom Meeting" ? "secondary" : "outline"
                  }
                >
                  Zoom
                </Button>

                <Button
                  type="button"
                  onClick={() => setActivePlatform("Google Meet")}
                  className="w-full"
                  variant={
                    activePlatform === "Google Meet" ? "secondary" : "outline"
                  }
                >
                  Google Meet
                </Button>

                <Button
                  type="button"
                  onClick={() => setActivePlatform("Microsoft Teams")}
                  className="w-full"
                  variant={
                    activePlatform === "Microsoft Teams"
                      ? "secondary"
                      : "outline"
                  }
                >
                  Microsoft Teams
                </Button>
              </ButtonGroup>
              <p className="text-red-500 text-sm">
                {fields.videoCallSoftware.errors}
              </p>
            </div>
          </CardContent>

          <CardFooter className="w-full flex justify-between">
            <Button variant="secondary" asChild>
              <Link href="/dashboard">Cancel</Link>
            </Button>

            <SubmitButton text="Edit Event Type" />
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
