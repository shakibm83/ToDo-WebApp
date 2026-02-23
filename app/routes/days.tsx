import type { Route } from "./+types/days";
import { getDays } from "~/data/api/tasks.api";
import Days from "~/components/Days";
import { useState } from "react";
import TasksPanel from "~/components/TasksPanel";


export async function clientLoader({ }) {
  return { days: await getDays() };
}

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: `${params.date} To Do App` },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home({ params, loaderData }: Route.ComponentProps) {
  const [days, setDays] = useState(loaderData.days)

  return (
    <div className="flex flex-row min-h-screen gap-6 mt-6">
      <Days days={days} />
      <TasksPanel date={new Date(params.date)} />
    </div>
  );
}
