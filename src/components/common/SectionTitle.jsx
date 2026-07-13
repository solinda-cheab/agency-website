export default function SectionTitle({
  number,
  title,
  size = "text-4xl sm:text-5xl lg:text-[5rem]",
  className = "",
}) {
  return (
    <div className={`flex flex-wrap items-baseline gap-3 sm:gap-6 ${className}`}>
      <span className="text-2xl sm:text-3xl italic font-light opacity-80">{number}</span>
      <h2 className={`hero-title ${size} uppercase leading-none`}>
        {title}
      </h2>
    </div>
  );
}
