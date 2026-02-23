import { DayOfWeekToString, GetTime } from "~/utilities/time";
import { NavLink } from "react-router";

type props = {
    date: Date
}

export default function Day(props: props) {
    const navLinkStyle = "flex flex-row w-full p-2 rounded items-center justify-between";
    const dateLink = GetTime(props.date);
    return (
        <NavLink to={`/day/${dateLink}`} className={({ isActive }) => isActive ? `${navLinkStyle} bg-blue-600/50` : `${navLinkStyle} bg-gray-600/50`} >
            <p>{DayOfWeekToString(props.date.getDay())}</p>
            <p className="text-xs text-gray-600">{dateLink}</p>
        </NavLink>
    );
}