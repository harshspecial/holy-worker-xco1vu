import Card from '../Card';
import { MoreHorizontal, PlusCircle, Slash, Trash2 } from 'react-feather';

export default function MyCards({ cards }) {
  // const {data} = balanceDetails;
  return (
    <section className='mt-8 text-gray-400'>
      <p className='mb-4 text-xs font-semibold uppercase'>My cards</p>
      <Card>
        <div className='flex h-full w-full snap-x overflow-x-auto overscroll-x-auto pb-4'>
          {cards.map((card, index) => (
            <Card
              bgClass='bg-black'
              widthClass='w-60 h-36'
              key={`card-${index}`}
              paddingClass='mr-4'
            />
          ))}
        </div>
        <div className='flex justify-around'>
          <button>
            <div className='rounded-full bg-violet-200 px-2 py-2 hover:bg-slate-200'>
              <PlusCircle color='#5455e7' />
            </div>
            <p className='mt-2 text-[10px] font-semibold text-black'>Request</p>
          </button>
          <button>
            <div className='rounded-full bg-violet-200 px-2 py-2 hover:bg-slate-200'>
              <Slash color='#5455e7' />
            </div>
            <p className='mt-2 text-[10px] font-semibold text-black'>Freeze</p>
          </button>
          <button>
            <div className='rounded-full bg-violet-200 px-2 py-2 hover:bg-slate-200'>
              <Trash2 color='#5455e7' />
            </div>
            <p className='mt-2 text-[10px] font-semibold text-black'>Delete</p>
          </button>
          <button>
            <div className='rounded-full bg-violet-200 px-2 py-2 hover:bg-slate-200'>
              <MoreHorizontal color='#5455e7' />
            </div>
            <p className='mt-2 text-[10px] font-semibold text-black'>More</p>
          </button>
        </div>
      </Card>
    </section>
  );
}
