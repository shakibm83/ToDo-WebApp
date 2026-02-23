import { Outlet } from "react-router";
import Navbar from "~/components/Navbar";

export default function MainLayout() {
    return (
        <div className="bg-linear-to-br from-gray-900 to-slate-800 p-4">
            <Navbar />
            <Outlet />
        </div>
    );
}