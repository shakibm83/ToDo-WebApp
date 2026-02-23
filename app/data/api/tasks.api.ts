import type { Task } from "../models/TaskModel";
import { Client } from "../client";

export async function getAllTasks(): Promise<Task[]> {
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
    const days: resType[] = await Client.get("items/task?fields[date]=1");

    // Transform Data to Date[]
    let datesSet:Set<string> = new Set<string>;

    for(let d of days){
        datesSet.add(d.date);
    }

    let dates:Date[] = [];
    datesSet.forEach((d)=>dates.push(new Date(d)));

    // Return Data
    return dates;
}