import ProjectCard from './ProjectCard'

function ProjectGrid({ projects }) {
  return (
    <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
      {projects.map((project) => (
        <ProjectCard key={project.title} title={project.title} description={project.description} />
      ))}
    </div>
  )
}

export default ProjectGrid
