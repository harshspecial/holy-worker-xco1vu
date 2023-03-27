import Button from "../Button";
import Dropdown  from "../Dropdown";
import { Bell, Settings } from 'react-feather';

export default function Header({ menuItems, userDetails }) {
    const {name, tier} = userDetails;
    return (<header className="w-full flex justify-between items-center h-24 px-6 sticky top-0 bg-white">
        <ul className="flex justify-start items-center">
            {menuItems.map(item => (<li key={item.id} className={`uppercase text-xs mr-3 hover:text-black ${item.selected ? 'font-bold text-black' : 'font-medium'}`}><a href="/">{item.label}</a></li>))}
        </ul>
        <div className="flex justify-end items-center">
            <Button className="mr-5">Move Money</Button>
            <button className="rounded-full px-2 py-2 bg-slate-50 mr-5 hover:bg-slate-200"><Bell color="black" /></button>
            <button className="rounded-full px-2 py-2 bg-slate-50 mr-5 hover:bg-slate-200"><Settings color="black" /></button>
            <Dropdown title={`${name.firstName} ${name.lastName}`} subtitle={tier} dropdownContents={[]} image={userDetails.image} />
        </div>
    </header>);
}
