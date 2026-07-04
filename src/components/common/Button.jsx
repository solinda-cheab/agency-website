function Button({ children, variant = 'primary', ...props }) {
  const style = {
    padding: '0.75rem 1.25rem',
    borderRadius: '999px',
    border: 'none',
    cursor: 'pointer',
    background: variant === 'secondary' ? '#111827' : '#2563eb',
    color: '#fff',
  }

  return (
    <button style={style} {...props}>
      {children}
    </button>
  )
}

export default Button
