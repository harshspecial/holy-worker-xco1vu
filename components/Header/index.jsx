import Button from '../Button';
import Dropdown from '../Dropdown';
import { Bell, Settings } from 'react-feather';

export default function Header({ menuItems, userDetails }) {
  if(!menuItems || !userDetails) {
    return <></>;
  }
  const { name, tier } = userDetails;
  return (
    <header className='sticky top-0 flex h-24 w-full items-center justify-between bg-white px-6'>
      <ul className='flex items-center justify-start'>
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`mr-3 text-xs uppercase hover:text-black ${
              item.selected ? 'font-bold text-black' : 'font-medium'
            }`}
          >
            <a href='#'>{item.label}</a>
          </li>
        ))}
      </ul>
      <div className='flex items-center justify-end'>
        <Button className='mr-5'>Move Money</Button>
        <button className='mr-5 rounded-full bg-slate-50 px-2 py-2 hover:bg-slate-200'>
          <Bell color='black' />
        </button>
        <button className='mr-5 rounded-full bg-slate-50 px-2 py-2 hover:bg-slate-200'>
          <Settings color='black' />
        </button>
        <Dropdown
          title={`${name.firstName} ${name.lastName}`}
          subtitle={tier}
          dropdownContents={[]}
          image={userDetails.image}
        />
      </div>
    </header>
  );
}
