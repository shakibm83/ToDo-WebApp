import { getDays, getTasksOfDay } from "~/data/api/tasks.api";
import type { Route } from "../+types/home";
import Days from "~/components/Days";
import { useEffect, useState } from "react";
import TasksPanel from "~/components/TasksPanel";



export async function clientLoader() {
  return { days: await getDays() };
}

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: `ToDo App` },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const [days, setDays] = useState(loaderData.days);

  return (
    <div className="flex flex-row min-h-screen gap-6 mt-6">
      <Days days={days} />
      <TasksPanel date={new Date()} />
    </div>
  );
}
