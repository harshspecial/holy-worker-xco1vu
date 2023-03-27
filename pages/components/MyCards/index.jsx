import Card from "../Card";
import { MoreHorizontal, PlusCircle, Slash, Trash2 } from "react-feather";

export default function MyCards({ cards }) {
    // const {data} = balanceDetails;
    return (
        <section className="mt-8 text-gray-400">
            <p className="uppercase mb-4 font-semibold text-xs">My cards</p>
            <Card>
                <div className="flex w-full snap-x overflow-x-auto overscroll-x-auto h-full pb-4">
                    {cards.map((card, index) => (
                        <Card bgClass="bg-black" widthClass="w-60 h-36" key={`card-${index}`} paddingClass="mr-4"/>
                    ))}
                </div>
                <div className="flex justify-around">
                    <button><div className="rounded-full px-2 py-2 bg-violet-200 hover:bg-slate-200"><PlusCircle color="#5455e7" /></div><p className="text-black text-[10px] font-semibold mt-2">Request</p></button>
                    <button><div className="rounded-full px-2 py-2 bg-violet-200 hover:bg-slate-200"><Slash color="#5455e7" /></div><p className="text-black text-[10px] font-semibold mt-2">Freeze</p></button>
                    <button><div className="rounded-full px-2 py-2 bg-violet-200 hover:bg-slate-200"><Trash2 color="#5455e7" /></div><p className="text-black text-[10px] font-semibold mt-2">Delete</p></button>
                    <button><div className="rounded-full px-2 py-2 bg-violet-200 hover:bg-slate-200"><MoreHorizontal color="#5455e7" /></div><p className="text-black text-[10px] font-semibold mt-2">More</p></button>
                </div>
            </Card>
        </section>
    )
}