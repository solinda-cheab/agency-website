import Container from '../components/common/Container'
import SEO from '../components/common/SEO'
// 1. Keep imports as they were
import { BrandIcon, ClockIcon, ContentIcon } from "../components/common/icons";
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';

const SERVICES_DATA = [
  {
    id: 1,
    title: 'Brand Strategy',
    description: 'Crafting cohesive brand strategies that elevate your identity and grow engagement.',
    icon: BrandIcon, // <-- PASS THE COMPONENT DIRECTLY (No < /> brackets!)
    isEdge: false,
  },
  {
    id: 2,
    title: 'Digital Marketing',
    description: 'Driving measurable results through targeted campaigns and creative content.',
    icon: ClockIcon, // <-- PASS THE COMPONENT DIRECTLY
    isEdge: false,
  },
  {
    id: 3,
    title: 'Creative Design',
    description: 'Designing memorable visuals and experiences that resonate with your audience.',
    icon: ContentIcon, // <-- PASS THE COMPONENT DIRECTLY
    isEdge: true,
  },
]

function Services() {
  return (
    <Container style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <SEO
        config={{
          title: "Our Services",
          description: "Modern digital agency specializing in web design, branding, and development.",
          image: "/og-image.jpg",
        }}
      />
      
      {/* SERVICES SECTION */}
      <section id="services" className="w-full bg-[#0052cc] text-white py-20 px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle number="02" title="Our Services" className="mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {SERVICES_DATA.map((service) => (
              <Card
                key={service.id}
                icon={service.icon} // This now cleanly passes the component reference!
                title={service.title}
                description={service.description}
                isEdge={service.isEdge}
              />
            ))}
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Services;