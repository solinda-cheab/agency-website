export default function Button({
  children,
  type = "button",
  onClick,
  className = "",
  full = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#ff7e1a] text-white px-12 py-4 font-bold text-lg uppercase shadow-xl hover:bg-[#e66d10] transition-colors ${
        full ? "w-full md:w-auto" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
}
