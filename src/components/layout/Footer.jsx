export default function Footer() {
  return (
    <footer className="w-full bg-[#0040a1] text-white py-6 px-12 z-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm font-bold uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-white" />
          <span>CSLD & CPSRY</span>
        </div>
        <div className="my-4 md:my-0">+855 117 562 83</div>
        <a className="hover:underline" href="@solindacheab">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
