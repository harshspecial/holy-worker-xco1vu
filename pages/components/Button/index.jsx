export default function Button({innerRef, className, children, ...props}){
    return (<button ref={innerRef} {...props} className={`${className} rounded-full text-black text-xs hover:text-white hover:bg-black transition ease-in-out shadow-lg py-3 px-5 font-bold`}>{children}</button>)
}