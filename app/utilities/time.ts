
export function DayOfWeekToString(dayOfWeek: number) {
    switch (dayOfWeek) {
        case 0:
            return "Sunday"
        case 1:
            return "Monday"
        case 2:
            return "Tuseday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
        default:
            return "Sunday"
    }
}

export function GetTime(date: Date) {
    return date.toISOString().split("T")[0];
}