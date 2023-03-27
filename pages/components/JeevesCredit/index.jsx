import { RefreshCcw } from "react-feather";
import Card from "../Card";

export default function JeevesCredit({balanceDetails = {
    "available_amount": 100000,
    "currency": "USD",
    "pending_amount": 50000,
    "total_amount": 150000
  }}) {
    return (
        <section className="mt-8 text-neutral-400">
            <p className="uppercase mb-4 font-semibold text-xs">Jeeves credit</p>
            <Card>
                <div className="flex justify-between w-full">
                    <div className="w-1/2 pr-4 flex flex-col justify-center">
                        <p className="uppercase text-xs font-semibold tracking-tighter">current balance</p>
                        <div className="flex items-center">
                            <p className="text-black text-xl font-semibold mt-2">$800,000.00</p>
                            <span className="inline-block p-0.5 px-1 py-1 rounded-md text-xs text-black bg-neutral-200 font-bold ml-3 mt-2">MXN</span>
                            <p className="text-[10px] font-semibold ml-auto"><i>of</i> $1,000,000.00</p>
                        </div>
                        <div className="flex mt-2">
                            <div className="border-2 border-black rounded-xl w-4/12"></div>
                            <div className="border-2 border-neutral-500 rounded-xl w-1/12 mx-2"></div>
                            <div className="border-2 border-gray-300 rounded-xl flex-1 w-7/12"></div>
                        </div>
                        <div className="flex text-[10px] text-black mt-3">
                          <p className="flex items-center mr-3">
                            <span className="rounded-full bg-black inline-block w-1.5 h-1.5 mr-1" /> Spent
                          </p>
                          <p className="flex items-center">
                            <span className="rounded-full bg-neutral-500 inline-block w-1.5 h-1.5 mr-1" /> Pending
                          </p>
                        </div>
                    </div>
                    <div className="w-1/2 pl-4">
                      <div className="flex items-center justify-between">
                          <div>
                            <p className="uppercase text-[10px] font-bold tracking-tighter">Amount due</p>
                            <p className="text-black text-xl font-semibold mt-y-1">$500,000.00</p>
                            <p className="uppercase text-[10px] font-bold tracking-tighter">Next payment Mar 1, 2023</p>
                          </div>
                          <button className="rounded-full text-white bg-black text-[10px] hover:bg-neutral-600 transition ease-in-out shadow-lg px-3 py-2 font-semibold">
                            Make a payment
                          </button>
                      </div>
                      <div className="mt-6 text-black text-[10px] flex items-center font-semibold">
                        <RefreshCcw className="mr-1" size={10}/>
                        <span>AutoPay Mar 13</span>
                      </div>
                      <a href="/" className="text-[10px] underline text-neutral-600">View your statement</a>
                    </div>
                </div>
            </Card>
        </section>
    )
}