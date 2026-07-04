function Navbar() {
  return (
    <header style={{ padding: '1rem 2rem', borderBottom: '1px solid #eee' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong>Agency Studio</strong>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
