import Day from "./Day";

type props = {
    days: Date[]
}

export default function Days(props: props) {

    return (
        <div className="flex flex-col backdrop-blur-lg bg-white/10 max-w-96 p-5 rounded gap-6">
            <div className="flex flex-row items-center gap-2">
                <p className="text-lg">Days</p>
                <div className="w-full h-0.5 bg-gray-500"></div>
            </div>
            <div className="flex flex-col  gap-3">
                {
                    props.days && props.days.map((d,i)=><Day date={d} key={i} />) 
                }
            </div>
        </div>
    );
}