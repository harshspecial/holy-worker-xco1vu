import CurrencyFlag from 'react-currency-flags';
import {formatCurrency} from 'country-currency-map';
import Card from '../Card';

export default function CountryBalCard({currencyBalance}) {
    return (
        <button className='text-left mr-5 snap-start'>
            <Card bgClass='bg-white hover:bg-slate-50' widthClass='w-36' paddingClass='px-3 py-3'>
                <div className='rounded-full overflow-hidden w-8 h-8'>
                    <CurrencyFlag currency={currencyBalance.currency} height={32} />
                </div>
                <p className="text-[10px] text-black mt-8">{currencyBalance.currency} account</p>
                <p className="text-sm font-semibold text-black mt-1">{formatCurrency(currencyBalance.available_amount, currencyBalance.currency)}</p>
                <p className="text-[10px] text-violet-500 mt-1">{currencyBalance.currency}</p>
            </Card>
        </button>
    );
}