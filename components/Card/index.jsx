export default function Card({
  children = <span />,
  widthClass = 'w-full',
  bgClass = 'bg-neutral-100',
  paddingClass = 'px-4 py-4',
}) {
  return (
    <div
      className={`shrink-0 snap-start overflow-hidden rounded-md ${paddingClass} ${widthClass} ${bgClass}`}
    >
      {children && <>{children}</>}
    </div>
  );
}
