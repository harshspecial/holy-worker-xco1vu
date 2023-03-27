import Card from '../Card';
import CountryBalCard from './CountryBalCard';
import { ArrowRight } from 'react-feather';

export default function Treasury({ balanceDetails }) {
  const { data } = balanceDetails;
  return (
    <section className='mt-8 text-gray-400'>
      <p className='mb-4 text-xs font-semibold uppercase'>Your Treasury</p>
      <Card>
        <div className='flex justify-between'>
          <p className='text-xs font-semibold uppercase tracking-tighter'>Available Balance</p>
          <a href='#' className='mr-4 flex items-center text-xs font-semibold text-violet-500'>
            Manage your accounts <ArrowRight size={10} className='ml-2' />
          </a>
        </div>
        <div className='flex items-center'>
          <p className='mt-2 text-xl font-bold text-black'>$500,000.00</p>
          <select className='mt-2 ml-3 h-5 appearance-none rounded-md border-none bg-violet-100 bg-[center_right_2px] py-0 pl-1 pr-5 text-xs font-semibold text-violet-500'>
            {data.map((item) => (
              <option value={item.currency} key={item.currency}>
                {item.currency}
              </option>
            ))}
          </select>
        </div>
        <p className='mt-1 text-[10px] font-semibold'>
          {' '}
          your total available balance in MXN at timestamp
        </p>
        <div className='mt-3 flex w-full shrink-0 snap-x overflow-x-auto overscroll-x-auto'>
          {data.map((item) => (
            <CountryBalCard currencyBalance={item} key={item.currency} />
          ))}
        </div>
      </Card>
    </section>
  );
}
