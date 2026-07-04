import Container from '../components/common/Container'
import ProjectGrid from '../components/portfolio/ProjectGrid'

const projects = [
  { title: 'Northstar Labs', description: 'B2B conversion-focused redesign' },
  { title: 'Aurelia Health', description: 'Patient portal and wellness platform' },
]

function Portfolio() {
  return (
    <Container style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <h1>Portfolio</h1>
      <p>Selected projects that showcase our craft and results.</p>
      <ProjectGrid projects={projects} />
    </Container>
  )
}

export default Portfolio
