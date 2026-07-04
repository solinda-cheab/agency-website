function SectionTitle({ title, subtitle }) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <h2 style={{ marginBottom: '0.25rem' }}>{title}</h2>
      {subtitle && <p style={{ color: '#6b7280', margin: 0 }}>{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
