function ProjectCard({ title, description }) {
  return (
    <div style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '0.75rem' }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default ProjectCard
