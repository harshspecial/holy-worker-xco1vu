import { ChevronRight } from "react-feather";
import Image from "next/image";

export default function List({item, showCheveron, lightMode}){
    const {label, subtitle, image, isVerified} = item;
    return (
        <li className="snap-start">
            <a href="/" className={`${lightMode ? 'hover:bg-neutral-100 focus:bg-neutral-100' : 'hover:bg-white focus:bg-white'} font-bold f-10 text-left pl-2 pr-3 py-2 flex items-center w-full overflow-hidden rounded-lg hover:shadow`}>
                <div className="bg-neutral-300 w-10 h-10 overflow-hidden rounded-full mr-3">
                  {image && <Image
                      src={image.src}
                      alt={image.alt}
                      width={40}
                      height={40}
                      className="sticky"
                  />}
                </div>
                <div>
                    <p className="mb-1 text-[10px] text-black">{label}</p>
                    <p className="text-[8px] text-gray-400">{subtitle}</p>
                </div>
                {showCheveron && <ChevronRight className="ml-auto" color="black" size={16} />}
            </a>
        </li>
    )
}