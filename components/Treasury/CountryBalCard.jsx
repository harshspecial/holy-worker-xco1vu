import CurrencyFlag from 'react-currency-flags';
import { formatCurrency } from 'country-currency-map';
import Card from '../Card';

export default function CountryBalCard({ currencyBalance }) {
  return (
    <button className='mr-5 snap-start text-left'>
      <Card bgClass='bg-white hover:bg-slate-50' widthClass='w-36' paddingClass='px-3 py-3'>
        <div className='h-8 w-8 overflow-hidden rounded-full'>
          <CurrencyFlag currency={currencyBalance.currency} height={32} />
        </div>
        <p className='mt-8 text-[10px] text-black'>{currencyBalance.currency} account</p>
        <p className='mt-1 text-sm font-semibold text-black'>
          {formatCurrency(currencyBalance.available_amount, currencyBalance.currency)}
        </p>
        <p className='mt-1 text-[10px] text-violet-500'>{currencyBalance.currency}</p>
      </Card>
    </button>
  );
}
