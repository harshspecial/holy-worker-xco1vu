export default function Card({ children=(<span/>), widthClass = "w-full", bgClass = "bg-neutral-100", paddingClass = "px-4 py-4" }) {
  return <div className={`rounded-md overflow-hidden shrink-0 snap-start ${paddingClass} ${widthClass} ${bgClass}`}>
    {children && <>{children}</>}
  </div>;
}
