import Container from '../components/common/Container'
import ProjectGrid from '../components/portfolio/ProjectGrid'
import { seoData } from '../config/seoData'

const projects = [
  { title: 'Northstar Labs', description: 'B2B conversion-focused redesign' },
  { title: 'Aurelia Health', description: 'Patient portal and wellness platform' },
]

function Portfolio() {
  return (
    <Container style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
 {/* Passing the targeted home metadata configuration dictionary */}
      <SEO config={seoData.portfolio} />
      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="w-full work-grid-bg text-white py-20 px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-6 mb-20">
            <span className="text-3xl italic font-light opacity-80">03</span>
            <h2 className="text-5xl md:text-[5rem] font-black uppercase">Our Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="bg-[#f9f9f9] p-4 group cursor-pointer transition-transform hover:-translate-y-2">
              <div className="bg-gray-200 aspect-[4/3] mb-6 overflow-hidden relative">
                <img alt="Tech Startup Launch" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6zEUkhyZoTp5jEfRyh17CeGHgP86B0abe3fkymgSSZ1Y_bZbqga_R-Lf2Z0iZNXIloWGlIUWn-uiKvbsyD1H49IrgZezhLYyxd4b9TmPN5Gv02e2Tw-MFoY6rDvqJAZmupQ_iNndDHT1Hnt8_FBwGoOHpSMtEuYrAT6awzDNvHVdpUui_Pa2NTpqdTymSYiOfFx2L20Hj_tJYTeD2EeFgvdEKnMPCQbzNKQYKOFqEMPr6lrOlUmWUlb0c_gALD8Pi0dkOVsPjv4X7" />
                <div className="absolute inset-0 bg-[#0052cc]/10 mix-blend-multiply"></div>
              </div>
              <div className="px-4 pb-8">
                <h3 className="text-4xl font-black text-[#0052cc] mb-6 leading-tight">Tech Startup<br />Launch</h3>
                <p className="text-[#0052cc] text-sm leading-relaxed opacity-80">Launched a tech startup with a dynamic marketing plan...</p>
              </div>
            </div>
            <div className="bg-[#f9f9f9] p-4 group cursor-pointer transition-transform hover:-translate-y-2 md:mt-24">
              <div className="bg-gray-200 aspect-[4/3] mb-6 overflow-hidden relative">
                <img alt="Urban Fashion" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-cZf0y6MqUXgDf_TCKbqFbN1ZWGrI7Lsie7DE_dA8_GNuVX_3pkleB7OyYwPLRSlY3k3eca1wZhcQlY3UWb75YHSHYs5hshSAtXdTrH52CEYUe8gf6QwidpACmzdbyVkfpQpI9rpM19Ij2tkHvr39q0ybMIUJxggkAidr07T9btblr-C9tJ3oeLzSp19dzTzItLvW5oTb8dPFm4Lb9hX8K95AKd6oEJDFZ5Gp10gX2dEwwBvDWZKGm1vublJdi5CcNy2TYuZ6L9Yp" />
                <div className="absolute inset-0 bg-[#0052cc]/10 mix-blend-multiply"></div>
              </div>
              <div className="px-4 pb-8">
                <h3 className="text-4xl font-black text-[#0052cc] mb-6 leading-tight">Urban Fashion<br />Brand Project</h3>
                <p className="text-[#0052cc] text-sm leading-relaxed opacity-80">Revitalized the online presence of an urban fashion brand...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Portfolio
