import Button from "../Button";
import { Bell } from 'react-feather';
export default function Header({ menuItems }) {
    return (<header className="w-full flex justify-between items-center h-24">
        <ul className="flex justify-start items-center">
            {menuItems.map(item => (<li key={item.id} className={`uppercase text-sm mr-3 hover:text-black ${item.selected ? 'font-bold text-black' : 'font-medium'}`}><a href="/">{item.label}</a></li>))}
        </ul>
        <div className="flex justify-end items-center">
            <Button>Move Money</Button>
            <div className="rounded-full px-2 py-2 bg-slate-50"><Bell /></div>
        </div>
    </header>);
}