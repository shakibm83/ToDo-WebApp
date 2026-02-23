

type props = {
    title: string,
}

export default function Header({ title }: props) {
    return (
        <div className="flex flex-row items-center gap-2 w-full">
            <p className="text-lg">{title}</p>
            <div className="w-full h-0.5 bg-gray-500"></div>
        </div>
    );
}