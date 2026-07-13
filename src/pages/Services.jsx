import Container from '../components/common/Container'

const SERVICES_DATA = [
  {
    title: 'Brand Strategy',
    description: 'Crafting cohesive brand strategies that elevate your identity and grow engagement.',
    icon: <span className="text-6xl">💼</span>,
  },
  {
    title: 'Digital Marketing',
    description: 'Driving measurable results through targeted campaigns and creative content.',
    icon: <span className="text-6xl">📈</span>,
  },
  {
    title: 'Creative Design',
    description: 'Designing memorable visuals and experiences that resonate with your audience.',
    icon: <span className="text-6xl">🎨</span>,
  },
]

function Services() {
  return (
    <Container style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
       <SEO
        title="Agency Website"
        description="Modern digital agency specializing in web design, branding, and development."
        image="/og-image.jpg"
        url="https://your-domain.com"
      />
      
      {/* SERVICES SECTION */}
      <section id="services" className="w-full bg-[#0052cc] text-white py-20 px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-6 mb-16">
            <span className="text-3xl italic font-light opacity-80">02</span>
            <h2 className="text-5xl md:text-[5rem] font-black uppercase">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {SERVICES_DATA.map((service, index) => (
              <div key={index} className={`bg-[#d1f2eb] border-l border-[#0052cc] border-t-4 border-t-[#0052cc] border-dashed p-10 flex flex-col h-full min-h-[400px] relative ${index === SERVICES_DATA.length - 1 ? 'border-r' : ''}`}>
                <div className="absolute top-4 left-4 w-2 h-2 bg-[#0052cc]"></div>
                <div className="self-end mb-12">{service.icon}</div>
                <div className="mt-auto">
                  <h3 className="text-3xl text-[#0052cc] font-bold italic mb-4">{service.title}</h3>
                  <p className="text-[#0052cc] text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Services
