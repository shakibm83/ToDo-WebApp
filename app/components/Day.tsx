import { DayOfWeekToString } from "~/utilities/time";
import { NavLink } from "react-router";

type props = {
    date: Date
}

export default function Day(props: props) {
    const navLinkStyle = "flex flex-row w-full p-2 rounded items-center justify-between";
    // const date = `${props.date.getFullYear()} / ${props.date.getMonth()} / ${props.date.getDate()}`;
    const date = props.date.toLocaleDateString();
    const dateLink = `${props.date.getFullYear()}-${props.date.getMonth()}-${props.date.getDate()}`;
    return (
        <NavLink to={`/day/${dateLink}`} className={({ isActive }) => isActive ? `${navLinkStyle} bg-blue-600/50` : `${navLinkStyle} bg-gray-600/50`} >
            <p>{DayOfWeekToString(props.date.getDay())}</p>
            <p className="text-xs text-gray-600">{date}</p>
        </NavLink>
    );
}