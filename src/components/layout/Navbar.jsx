import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "../common/icons";

const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { 
    label: "Portfolio", 
    href: "#work", 
    hasDropdown: true,
    dropdownItems: [
      { label: "Web Development", href: "#web-dev" },
      { label: "UI/UX Design", href: "#design" },
      { label: "Case Studies", href: "#cases" }
    ]
  },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const navRef = useRef(null);
  const linkRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [ruler, setRuler] = useState({ left: 0, width: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Calculate and animate the active sliding indicator line
  function updateRuler(index) {
    const linkEl = linkRefs.current[index];
    const navEl = navRef.current;
    if (!linkEl || !navEl) return;
    const linkRect = linkEl.getBoundingClientRect();
    const navRect = navEl.getBoundingClientRect();
    setRuler({ 
      left: linkRect.left - navRect.left + navEl.scrollLeft, 
      width: linkRect.width 
    });
  }

  useEffect(() => {
    // Only calculate sliding ruler adjustments on desktop viewport layout
    if (window.innerWidth >= 1024) {
      updateRuler(activeIndex);
    }
    
    function onResize() {
      if (window.innerWidth >= 1024) {
        updateRuler(activeIndex);
      } else {
        setRuler({ left: 0, width: 0 });
      }
    }
    
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeIndex]);

  function handleLinkClick(e, index, href, hasDropdown) {
    // If it has a dropdown on desktop, let toggle state handle it instead of immediate jump
    if (hasDropdown && window.innerWidth >= 1024) {
      e.preventDefault();
      setIsDropdownOpen(!isDropdownOpen);
      return;
    }

    if (href && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    
    setActiveIndex(index);
    setIsMobileMenuOpen(false); // Close mobile drawer on link navigation
    setIsDropdownOpen(false);
    
    setTimeout(() => {
      if (window.innerWidth >= 1024) updateRuler(index);
    }, 50);
  }

  return (
    <header className="sticky top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo / Brand Alignment */}
        <a href="/" className="flex items-center gap-3 group transition-transform hover:scale-[1.02]">
          <div className="flex gap-1.5 p-1 bg-slate-50 rounded-md border border-slate-200">
            <div className="w-3.5 h-3.5 bg-[#0052cc] rounded-sm transition-transform group-hover:rotate-12" />
            <div className="w-3.5 h-3.5 bg-[#ff7e1a] rounded-sm transition-transform group-hover:-rotate-12" />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-slate-900">
            CSLD<span className="text-[#0052cc]">&</span>CPSRY
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav ref={navRef} className="hidden lg:flex items-center gap-8 relative py-2">
          {navLinks.map((link, idx) => (
            <div 
              key={link.label} 
              className="relative"
              onMouseEnter={() => link.hasDropdown && setIsDropdownOpen(true)}
              onMouseLeave={() => link.hasDropdown && setIsDropdownOpen(false)}
            >
              <a
                ref={(el) => (linkRefs.current[idx] = el)}
                href={link.href}
                onClick={(e) => handleLinkClick(e, idx, link.href, link.hasDropdown)}
                className={`px-3 py-2 text-sm font-medium tracking-wide rounded-md transition-colors duration-200 flex items-center gap-1.5 cursor-pointer
                  ${activeIndex === idx 
                    ? "text-[#0052cc]" 
                    : "text-slate-600 hover:text-slate-900"
                  }`}
              >
                {link.label}
                {link.hasDropdown && (
                  <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180 text-[#0052cc]" : "text-slate-400"}`} />
                )}
              </a>

              {/* Functional Desktop Dropdown Menu Context */}
              {link.hasDropdown && isDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {link.dropdownItems?.map((subItem) => (
                    <a
                      key={subItem.label}
                      href={subItem.href}
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#0052cc] transition-colors"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Smooth Sliding Ruler Indicator underneath active choice */}
          <div
            className="absolute bottom-0 h-[3px] rounded-full bg-[#ff7e1a] transition-all duration-300 ease-out pointer-events-none"
            style={{ left: ruler.left, width: ruler.width }}
          />
        </nav>

        {/* Action Button Accent (Desktop) */}
        <div className="hidden lg:flex items-center">
          <a href="#contact" className="bg-[#0052cc] hover:bg-[#0041a3] text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-md shadow-blue-500/10 transition-all hover:shadow-lg hover:shadow-blue-500/20">
            Get Started
          </a>
        </div>

        {/* Mobile Hamburger / Menu Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 active:scale-95 transition-all focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Overlay Panel */}
      <div 
        className={`lg:hidden fixed inset-x-0 top-20 bg-white border-b border-slate-200 shadow-xl transition-all duration-300 ease-in-out origin-top transform
          ${isMobileMenuOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible pointer-events-none"}`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
          {navLinks.map((link, idx) => (
            <div key={link.label} className="block">
              <div
                onClick={(e) => handleLinkClick(e, idx, link.href, false)}
                className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-semibold tracking-wide transition-colors
                  ${activeIndex === idx 
                    ? "bg-blue-50/70 text-[#0052cc]" 
                    : "text-slate-700 hover:bg-slate-50"
                  }`}
              >
                <a href={link.href} className="w-full">{link.label}</a>
              </div>
              
              {/* Nested Expandable items for mobile view dropdown architecture */}
              {link.hasDropdown && (
                <div className="mt-1 ml-4 pl-4 border-l-2 border-slate-100 space-y-1">
                  {link.dropdownItems?.map((subItem) => (
                    <a
                      key={subItem.label}
                      href={subItem.href}
                      onClick={(e) => {
                        setIsMobileMenuOpen(false);
                        setActiveIndex(idx);
                      }}
                      className="block px-4 py-2.5 text-sm font-medium text-slate-500 hover:text-[#0052cc] rounded-lg transition-colors"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 border-t border-slate-100 px-4">
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center bg-[#0052cc] text-white py-3 rounded-xl font-semibold text-base shadow-sm">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}