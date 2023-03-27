export default function Button({ innerRef, className, children, ...props }) {
  return (
    <button
      ref={innerRef}
      {...props}
      className={`${className} rounded-full py-3 px-5 text-xs font-bold text-black shadow-lg transition ease-in-out hover:bg-slate-200`}
    >
      {children}
    </button>
  );
}
