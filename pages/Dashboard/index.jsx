import dynamic from 'next/dynamic';
import Treasury from '../components/Treasury';
import JeevesCredit from '../components/JeevesCredit';
import MyCards from '../components/MyCards';
import MyEmployees from '../components/MyEmployees';
import List from '../components/List';
import Card from '../components/Card';

// dynamically importing greeting because Date() gives different result on SSR and there may be hydration issues
const GreetingText = dynamic(() => import('../components/Greeting'), { ssr: false });

export default function Dashboard({ data, balanceDetails }) {
  const { userDetails, greeting, sideMenuItems, myEmployees } = data;

  return (
    <main className='mx-auto max-w-screen-2xl px-6 pt-8'>
      <section className='mb-5 h-16'>
        <p className='text-3xl font-semibold leading-relaxed text-black'>
          <GreetingText postFix={userDetails?.name?.firstName} />
        </p>
        <p className='text-xs font-semibold text-black'>{greeting}</p>
      </section>
      <div className='flex'>
        <section className='w-9/12 pr-2'>
          <Treasury balanceDetails={balanceDetails} />
          <JeevesCredit balanceDetails={balanceDetails?.data[0]} />
          <div className='flex'>
            <div className='w-1/2 pr-2'>
              <MyCards cards={[{}, {}]} />
            </div>
            <div className='w-1/2 pl-2'>
              <MyEmployees employees={myEmployees} />
            </div>
          </div>
        </section>
        <section className='w-3/12 pl-2 pt-16'>
          <List listItems={sideMenuItems} lightMode={true} showCheveron={false} />
          <Card bgClass='bg-zinc-800' widthClass='w-64'>
            <div className='flex flex-col'>
              <div className='mr-3 h-10 w-10 overflow-hidden rounded-full bg-neutral-300' />
              <a href='/' className='mb-1 mt-4 text-[10px] font-semibold text-gray-200'>
                Connect your ERP to Jeeves
              </a>
              <a href='/' className='text-[8px] text-gray-200'>
                find out more
              </a>
            </div>
          </Card>
        </section>
      </div>
    </main>
  );
}
