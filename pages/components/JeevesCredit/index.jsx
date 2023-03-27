import { RefreshCcw } from 'react-feather';
import Card from '../Card';

export default function JeevesCredit({
  balanceDetails = {
    available_amount: 100000,
    currency: 'USD',
    pending_amount: 50000,
    total_amount: 150000,
  },
}) {
  return (
    <section className='mt-8 text-neutral-400'>
      <p className='mb-4 text-xs font-semibold uppercase'>Jeeves credit</p>
      <Card>
        <div className='flex w-full justify-between'>
          <div className='flex w-1/2 flex-col justify-center pr-4'>
            <p className='text-xs font-semibold uppercase tracking-tighter'>current balance</p>
            <div className='flex items-center'>
              <p className='mt-2 text-xl font-semibold text-black'>$800,000.00</p>
              <span className='ml-3 mt-2 inline-block rounded-md bg-neutral-200 p-0.5 px-1 py-1 text-xs font-bold text-black'>
                MXN
              </span>
              <p className='ml-auto text-[10px] font-semibold'>
                <i>of</i> $1,000,000.00
              </p>
            </div>
            <div className='mt-2 flex'>
              <div className='w-4/12 rounded-xl border-2 border-black'></div>
              <div className='mx-2 w-1/12 rounded-xl border-2 border-neutral-500'></div>
              <div className='w-7/12 flex-1 rounded-xl border-2 border-gray-300'></div>
            </div>
            <div className='mt-3 flex text-[10px] text-black'>
              <p className='mr-3 flex items-center'>
                <span className='mr-1 inline-block h-1.5 w-1.5 rounded-full bg-black' /> Spent
              </p>
              <p className='flex items-center'>
                <span className='mr-1 inline-block h-1.5 w-1.5 rounded-full bg-neutral-500' />{' '}
                Pending
              </p>
            </div>
          </div>
          <div className='w-1/2 pl-4'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-[10px] font-bold uppercase tracking-tighter'>Amount due</p>
                <p className='mt-y-1 text-xl font-semibold text-black'>$500,000.00</p>
                <p className='text-[10px] font-bold uppercase tracking-tighter'>
                  Next payment Mar 1, 2023
                </p>
              </div>
              <button className='rounded-full bg-black px-3 py-2 text-[10px] font-semibold text-white shadow-lg transition ease-in-out hover:bg-neutral-600'>
                Make a payment
              </button>
            </div>
            <div className='mt-6 flex items-center text-[10px] font-semibold text-black'>
              <RefreshCcw className='mr-1' size={10} />
              <span>AutoPay Mar 13</span>
            </div>
            <a href='/' className='text-[10px] text-neutral-600 underline'>
              View your statement
            </a>
          </div>
        </div>
      </Card>
    </section>
  );
}
