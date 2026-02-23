import { useState } from "react";

type props = {
    id?: number,
    title: string,
    isDone: boolean,
}

export default function Task({ id, title, isDone }: props) {
    const [status, setStatus] = useState(isDone);
    const style: string = "flex flex-row p-2 border border-gray-700 rounded gap-2 relative";

    return (
        <div className={status ? `${style} bg-white/10` : `${style} bg-white/10`} onClick={() => { setStatus(!status) }}>
            <input type="checkbox" checked={status} onClick={() => { setStatus(!status) }} />
            <p className={status ? 'line-through' : ''}>{title}</p>
            <button onClick={(e) => { e.stopPropagation(); console.log("Salut"); }} className="absolute right-4 size-6 cursor-pointer"><img src="/app/assets/svgs/close.svg" /></button>
        </div >
    );
}