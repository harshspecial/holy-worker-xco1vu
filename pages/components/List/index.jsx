import Card from "../Card";
import ListItem from "./ListItem";

export default function List({listItems, lightMode=false, showCheveron=true, height}){
    return (
        <Card bgClass={`${lightMode? 'bg-white' : 'bg-neutral-100'}`} paddingClass="pl-2 pr-2 py-4">
          <div className="overflow-hidden">
            <ul className={`flex flex-col justify-start overflow-y-auto overscroll-y-auto snap-y`} style={{height: `${height}px` || 'auto'}}>
                {
                    listItems.map(item => (
                        <ListItem item={item} key={item.id} showCheveron={showCheveron} lightMode={lightMode} />
                    ))
                }
            </ul>
          </div>
        </Card>
    )
}