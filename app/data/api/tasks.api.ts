import type TaskModel from "../models/TaskModel";
import { Client } from "../client";
import { GetTime } from "~/utilities/time";

export async function getAllTasks(): Promise<TaskModel[]> {
    // const res = await fetch("http://todo.local/api/content/items/task");
    // if (!res.ok) {
    //     throw new Response("Failed to fetch tasks.", { status: res.status });
    // }
    // return res.json();
    return await Client.get("items/task");
}

export async function getDays(): Promise<Date[]> {

    // Type of This Api
    type resType = {
        _id: number,
        date: string,
    }

    // Get Data
    const days: resType[] = await Client.get("items/task?fields[date]=1&sort[_created]=-1");

    // Transform Data to Date[]
    let datesSet: Set<string> = new Set<string>;

    for (let d of days) {
        datesSet.add(d.date);
    }

    let dates: Date[] = [];
    datesSet.forEach((d) => dates.push(new Date(d)));

    // Return Data
    return dates;
}

export async function getTasksOfDay(date: Date): Promise<TaskModel[]> {
    console.log(`items/task?filter[date][$eq]=${GetTime(date)})}`);
    return await Client.get(`items/task?filter[date][$eq]=${GetTime(date)}`);
}