import Image from 'next/image';
import { ChevronDown } from 'react-feather';

export default function Dropdown({ title, subtitle, image, dropdownContents }) {
  return (
    <button className='f-10 flex w-52 items-center rounded-full bg-slate-50 py-2 pl-1 pr-3 text-left font-bold text-black hover:bg-slate-200'>
      <div className='mr-3 h-10 w-10 overflow-hidden rounded-full bg-neutral-300'>
        {image && <Image src={image.src} alt={image.alt} width={40} height={40} />}
      </div>
      <div>
        <p className='mb-1 text-[10px]'>{title}</p>
        <p className='text-[8px]'>{subtitle}</p>
      </div>
      <ChevronDown className='ml-auto' color='black' size={16} />
    </button>
  );
}
