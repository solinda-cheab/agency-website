import Container from '../components/common/Container'
import SEO from '../components/common/SEO'

function About() {
  return (
    <Container style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
       <SEO
        config={{
          title: "About Us",
          description: "Modern digital agency specializing in web design, branding, and development.",
          image: "/og-image.jpg",
        }}
      />
      {/* ABOUT SECTION */}
      <section id="about" className="w-full bg-[#0052cc] text-white py-20 px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-8 mb-12">
            <span className="text-5xl md:text-7xl italic font-light opacity-80">01</span>
            <h2 className="hero-title text-4xl md:text-[5rem] uppercase leading-none">About Our<br />Agency</h2>
          </div>
          <div className="border-t border-dashed border-white/30 mb-16"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div></div>
            <div>
              <h3 className="text-4xl font-bold mb-6">Who We Are</h3>
              <p className="text-lg leading-relaxed opacity-90">
                CSLD&CPSRY is a dynamic digital marketing agency dedicated to helping businesses expand their online presence and achieve sustainable growth...
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default About