import { Link } from "react-router";

export default function Navbar(){
    return (
        <div className="flex flex-row p-5 rounded backdrop-blur-lg bg-gray-400/10">
            <Link to={"/"}>ToDo App...</Link>
        </div>
    );
}