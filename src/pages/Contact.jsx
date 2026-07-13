import Container from '../components/common/Container'

function Contact() {
  return (
    <Container style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
       {/* Passing the targeted home metadata configuration dictionary */}
      <SEO config={seoData.contact} />
     {/* CONTACT SECTION */}
      <section id="contact" className="w-full bg-white text-[#0052cc] pt-24 pb-0 px-12 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-3xl italic font-light opacity-60">05</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase">Contact Us</h2>
            </div>
          </div>
          <div>
            <form onSubmit={handleContactSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <label className="block text-xs font-bold uppercase mb-2 opacity-60">First name *</label>
                  <input className="w-full bg-transparent border-0 border-b border-[#0052cc] py-2 focus:ring-0 focus:border-[#ff7e1a] outline-none" type="text" required />
                </div>
                <div className="relative">
                  <label className="block text-xs font-bold uppercase mb-2 opacity-60">Last name *</label>
                  <input className="w-full bg-transparent border-0 border-b border-[#0052cc] py-2 focus:ring-0 focus:border-[#ff7e1a] outline-none" type="text" required />
                </div>
              </div>
              <div className="relative">
                <label className="block text-xs font-bold uppercase mb-2 opacity-60">Email *</label>
                <input className="w-full bg-transparent border-0 border-b border-[#0052cc] py-2 focus:ring-0 focus:border-[#ff7e1a] outline-none" type="email" required />
              </div>
              <button className="bg-[#ff7e1a] text-white px-12 py-4 font-bold text-lg uppercase shadow-xl hover:bg-[#e66d10] w-full md:w-auto" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Contact
