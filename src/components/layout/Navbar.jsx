import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "../common/icons";

const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#work", hasDropdown: true },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const navRef = useRef(null);
  const linkRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [ruler, setRuler] = useState({ left: 0, width: 0 });

  function updateRuler(index) {
    const linkEl = linkRefs.current[index];
    const navEl = navRef.current;
    if (!linkEl || !navEl) return;
    const linkRect = linkEl.getBoundingClientRect();
    const navRect = navEl.getBoundingClientRect();
    setRuler({ left: linkRect.left - navRect.left + navEl.scrollLeft, width: linkRect.width });
  }

  useEffect(() => {
    updateRuler(activeIndex);
    function onResize() {
      updateRuler(activeIndex);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeIndex]);

  function handleClick(e, index, href) {
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveIndex(index);
    setTimeout(() => updateRuler(index), 30);
  }

  return (
    <header className="sticky top-0 w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="w-full flex flex-col gap-4 px-4 py-6 sm:px-8 lg:px-12 lg:flex-row lg:justify-between lg:items-center">
        {/* Logo/Brand - clickable to home */}
        <a href="/" className="flex items-center justify-center lg:justify-start bg-[#0052cc] text-white px-4 py-2 font-bold text-base sm:text-lg">
          <div className="flex gap-1 mr-3">
            <div className="w-3 h-3 bg-white" />
            <div className="w-3 h-3 bg-[#ff7e1a]" />
          </div>
          <span>CSLD&CPSRY</span>
        </a>

        {/* Navigation Pill */}
        <nav ref={navRef} className="relative w-full lg:w-auto bg-[#ff7e1a] rounded-full px-4 py-3 shadow-lg flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base text-black font-medium">
          {/* ruler */}
          <div
            className="absolute -bottom-2 h-1.5 rounded-full bg-[#0052cc] transition-all duration-200"
            style={{ left: ruler.left, width: ruler.width }}
          />

          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              ref={(el) => (linkRefs.current[idx] = el)}
              href={link.href}
              onClick={(e) => handleClick(e, idx, link.href)}
              className={`px-2 py-1 ${activeIndex === idx ? "border-b-2 border-black" : "hover:opacity-75 transition-opacity flex items-center gap-1"}`}
            >
              {link.label}
              {link.hasDropdown && <ChevronDownIcon className="w-4 h-4" />}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
