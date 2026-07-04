function Card({ title, children, ...props }) {
  return (
    <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '1rem', background: '#fff' }} {...props}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  )
}

export default Card
