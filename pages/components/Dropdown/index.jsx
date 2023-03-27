import Image from 'next/image';
import { ChevronDown } from 'react-feather';


export default function Dropdown({ title, subtitle, image, dropdownContents }) {
    return (<button className="rounded-full text-black bg-slate-50 hover:bg-slate-200 font-bold f-10 text-left pl-1 pr-3 py-2 flex items-center w-52">
        <div className="bg-neutral-300 w-10 h-10 overflow-hidden rounded-full mr-3">
            {image && <Image
                src={image.src}
                alt={image.alt}
                width={40}
                height={40}
            />}
        </div>
        <div>
            <p className="mb-1 text-[10px]">{title}</p>
            <p className="text-[8px]">{subtitle}</p>
        </div>
        <ChevronDown className="ml-auto" color="black" size={16} />
    </button>)
}