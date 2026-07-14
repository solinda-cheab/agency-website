import SEO from "../components/common/SEO";
import { seoData } from "../config/seoData";

import Footer from "../components/layout/Footer";
import HeroPixelDecoration from "../components/layout/HeroPixelDecoration";
import ContactPixelDecoration from "../components/layout/ContactPixelDecoration";
import SectionTitle from "../components/common/SectionTitle";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import ProjectCard from "../components/portfolio/ProjectCard";
import { ClockIcon, BrandIcon, ContentIcon, ArrowUpRightIcon } from "../components/common/icons";
import { projects, services, testimonials } from "../api/projects";

const iconMap = {
  clock: ClockIcon,
  brand: BrandIcon,
  content: ContentIcon,
};

const highlights = [
  {
    title: "Launch strategy",
    detail: "Positioning, messaging, and rollout plans that create momentum from day one.",
  },
  {
    title: "Performance growth",
    detail: "Creative and paid media tuned around measurable lift and sustainable scale.",
  },
  {
    title: "Full-funnel support",
    detail: "From idea to execution, we shape content, campaigns, and conversion paths.",
  },
];

export default function Home() {
  return (
    <div className="bg-white w-full overflow-x-hidden">
{/* Passing the targeted home metadata configuration dictionary */}
      <SEO config={seoData.home} />
      {/* ===================== HERO ===================== */}
      <main className="relative w-full grid-bg flex flex-col items-center border-[#0052cc] border-[20px] box-border">
       

        {/* Main Headline */}
        <section className="relative z-10 text-center mt-8 sm:mt-12 px-4 max-w-6xl">
          <div className="fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-[#0052cc]/20 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0052cc] shadow-sm">
           
            Multi-channel growth partners
          </div>
          <h1 className="hero-title text-[#0052cc] text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] uppercase mb-0 leading-[0.85] fade-up">
            Multi-Platform
          </h1>
          <h1 className="hero-title text-[#0052cc] text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] uppercase mb-0 leading-[0.85] fade-up">
            Advertising
          </h1>
          <h1 className="hero-title text-[#0052cc] text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] uppercase relative leading-[0.85] fade-up">
            Experts<span className="ml-2 inline-block h-4 w-4 bg-[#ff7e1a] sm:h-6 sm:w-6" />
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-[#1d3557] fade-up">
            We help ambitious brands turn bold ideas into measurable momentum across paid media, content, and digital storytelling.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row fade-up">
            <Button>See Our Work</Button>
            <a
              href="#contact"
              className="rounded-full border border-[#0052cc] px-8 py-4 font-semibold uppercase tracking-wide text-[#0052cc] transition duration-300 hover:-translate-y-1 hover:bg-[#0052cc] hover:text-white"
            >
              Book a Call
            </a>
          </div>
        </section>

        {/* Featured Card */}
        <section className="relative z-20 mt-6 mb-12 w-full max-w-6xl px-4 sm:mt-[-2rem] sm:mb-20">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="bg-[#d1f2eb] p-2 shadow-2xl fade-up">
              <div className="bg-white p-4 overflow-hidden rounded-md">
                <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-sm">
                  <img
                    alt="Digital Marketing Campaign on Phone"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCL_ieVSyKqVlemnKXLQ9qErP5_G7e1qzaGg0ThdxOVRb_9WaA3tOTV82v-ZtP0SVw5zS_UCpLGKUT2q4IIUqAt3PugSoVucvub9VI5oZ-1xHLCDxY1EnDc_VXAH0xM9QKg_bYMddv0F3KByiifORqJGtP-7eRT_3H0bvT2OLFK3igwpF09peV1Wx_zQy9TyyjlFx78fhmwnkTrWlMUktMNnrR65VpNeDULjgYKmxEWILFgX9wlCGaWsSlerN0PCphpeBrP3qAveuY"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-bold text-gray-800">Digital Marketing</h3>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`rounded-2xl border border-[#0052cc]/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${index === 1 ? "float-slow" : ""}`}
                >
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff7e1a]">
                    0{index + 1}
                  </p>
                  <h3 className="mb-2 text-xl font-bold text-[#0052cc]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <HeroPixelDecoration />

        <section className="w-full bg-[#f5f8ff] py-12 px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-[#0052cc]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <p className="text-4xl font-black text-[#0052cc]">15+</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Campaign launches</p>
            </div>
            <div className="rounded-3xl border border-[#0052cc]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <p className="text-4xl font-black text-[#0052cc]">4.8/5</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Client satisfaction</p>
            </div>
            <div className="rounded-3xl border border-[#0052cc]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <p className="text-4xl font-black text-[#0052cc]">24/7</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Creative support</p>
            </div>
          </div>
        </section>

        {/* ===================== ABOUT ===================== */}
        <section id="about" className="w-full bg-[#0052cc] text-white py-20 px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <SectionTitle number="01" title={<>About Our<br />Agency</>} className="mb-12" />
            <div className="border-t border-dashed border-white/30 mb-16" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div />
              <div>
                <h3 className="text-4xl font-bold mb-6">Who We Are</h3>
                <p className="text-lg leading-relaxed opacity-90">
                  CSLD&CPSRY is a dynamic digital marketing agency dedicated to helping
                  businesses expand their online presence and achieve sustainable growth.
                  Specializing in multi-platform advertising, branding, and interactive
                  content creation, we ensure every campaign is innovative and effective.
                  Our commitment to transparency and client collaboration fosters an
                  empowering environment for businesses to thrive in the digital world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== SERVICES ===================== */}
        <section id="services" className="w-full bg-[#0052cc] text-white py-20 px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <SectionTitle number="02" title="Our Services" className="mb-16" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {services.map((service) => (
                <Card
                  key={service.id}
                  icon={iconMap[service.icon]}
                  title={service.title}
                  description={service.description}
                  isEdge={service.isEdge}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ===================== OUR WORK ===================== */}
        <section id="work" className="w-full work-grid-bg text-white py-20 px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <SectionTitle number="03" title="Our Work" className="mb-20" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
            <div className="mt-20 border-t border-white/20 pt-8 flex justify-end">
              <a
                href="#"
                className="flex items-center gap-4 text-3xl font-bold italic group hover:text-[#ff7e1a] transition-colors"
              >
                <span>Explore Our Work</span>
                <ArrowUpRightIcon className="w-8 h-8 transform transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
              </a>
            </div>
          </div>
        </section>

        {/* ===================== TESTIMONIALS ===================== */}
        <section className="w-full bg-[#0052cc] text-white py-24 px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <SectionTitle number="04" title={<>Client<br />Testimonials</>} className="mb-4 tracking-tight" />
            <div className="border-t border-dashed border-white/40 mt-8 mb-16" />
            <div className="space-y-16">
              {testimonials.map((t) => (
                <div key={t.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                  <div className="serif-italic text-4xl font-medium">{t.name}</div>
                  <div className="text-xl leading-relaxed opacity-90 max-w-lg">"{t.quote}"</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== CONTACT ===================== */}
        <section id="contact" className="w-full bg-white text-[#0052cc] pt-24 pb-0 px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-3xl italic font-light opacity-60">05</span>
                <h2 className="text-7xl font-black uppercase">Contact Us</h2>
              </div>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-12 leading-tight">
                Have a project in mind or need our expertise? Reach out to us for a
                consultation today.
              </h3>
              <ContactForm />
            </div>
          </div>

          <ContactPixelDecoration />
        </section>
      </main>

 
    </div>
  );
}

function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();
    // Wire this up to your form-handling / API layer.
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <label className="block text-xs font-bold uppercase mb-2 opacity-60">
            First name *
          </label>
          <input
            required
            type="text"
            className="w-full bg-transparent border-0 border-b border-[#0052cc] py-2 focus:ring-0 focus:border-[#ff7e1a] transition-colors"
          />
        </div>
        <div className="relative">
          <label className="block text-xs font-bold uppercase mb-2 opacity-60">
            Last name *
          </label>
          <input
            required
            type="text"
            className="w-full bg-transparent border-0 border-b border-[#0052cc] py-2 focus:ring-0 focus:border-[#ff7e1a] transition-colors"
          />
        </div>
      </div>
      <div className="relative">
        <label className="block text-xs font-bold uppercase mb-2 opacity-60">Email *</label>
        <input
          required
          type="email"
          className="w-full bg-transparent border-0 border-b border-[#0052cc] py-2 focus:ring-0 focus:border-[#ff7e1a] transition-colors"
        />
      </div>
      <div className="relative">
        <label className="block text-xs font-bold uppercase mb-2 opacity-60">Message</label>
        <textarea
          rows="3"
          className="w-full bg-transparent border-0 border-b border-[#0052cc] py-2 focus:ring-0 focus:border-[#ff7e1a] transition-colors resize-none"
        />
      </div>
      <Button type="submit" full>
        Submit
      </Button>
    </form>
  );
}
