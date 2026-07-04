function Container({ children, style = {}, ...props }) {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', ...style }} {...props}>
      {children}
    </div>
  )
}

export default Container
