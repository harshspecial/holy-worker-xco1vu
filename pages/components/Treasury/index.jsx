import Card from "../Card";
import CountryBalCard from "./CountryBalCard";
import { ArrowRight } from "react-feather";

export default function Treasury({balanceDetails}) {
    const {data} = balanceDetails;
    return (
        <section className="mt-8 text-gray-400">
            <p className="uppercase mb-4 font-semibold text-xs">Your Treasury</p>
            <Card>
                <div className="flex justify-between">
                    <p className="uppercase text-xs font-semibold tracking-tighter">Available Balance</p>
                    <a href="/" className="flex text-xs font-semibold items-center text-violet-500 mr-4">Manage your accounts <ArrowRight size={10} className="ml-2" /></a>
                </div>
                <p className="text-black text-xl mt-2 font-bold">$500,000.00</p>
                <p className="text-[10px] font-semibold mt-1"> your total available balance in MXN at timestamp</p>
                <div className="flex shrink-0 w-full snap-x overflow-x-auto overscroll-x-auto mt-3">
                    {data.map(item => <CountryBalCard currencyBalance={item} key={item.currency} />)}
                </div>
            </Card>
        </section>
    )
}