import Day from "./Day";
import Header from "./Header";

type props = {
    days: Date[]
}

export default function Days(props: props) {

    return (
        <div className="flex flex-col backdrop-blur-lg bg-gray-400/10 min-w-96 p-5 rounded gap-6">
            <Header title="Days" />
            <div className="flex flex-col  gap-3">
                {
                    props.days && props.days.map((d,i)=><Day date={d} key={i} />) 
                }
            </div>
        </div>
    );
}