import { DayOfWeekToString, GetTime } from "~/utilities/time";
import Header from "./Header";
import type TaskModel from "../data/models/TaskModel";
import Task from "./Task";
import { useEffect, useState } from "react";
import { getTasksOfDay } from "~/data/api/tasks.api";

type props = {
    date: Date
}

export default function TasksPanel({ date }: props) {
    const today = GetTime(date);
    const [tasks, setTasks] = useState<TaskModel[]>([]);

    useEffect(() => {
        getTasksOfDay(date).then((r) => {
            console.log(GetTime(date));
            setTasks(r)
        })
    }, [today]);

    return (
        <div className="flex flex-col p-5 rounded backdrop-blur-lg bg-gray-400/10 w-full h-screen">
            <div className="flex flex-row items-center gap-4">
                <Header title={DayOfWeekToString(date.getDay())} />
                <p className="text-sm text-nowrap">{today}</p>
            </div>
            <div className="flex flex-col mt-6 gap-4">
                {
                    tasks && tasks.map((t, i) => <Task id={t._id} title={t.title} isDone={t.isDone} key={i} />)
                }
            </div>
        </div>
    );
}