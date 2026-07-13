import Container from '../components/common/Container'

function NotFound() {
  return (
    <Container style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
       <SEO
        title="Agency Website"
        description="Modern digital agency specializing in web design, branding, and development."
        image="/og-image.jpg"
        url="https://your-domain.com"
      />
      <h1>404</h1>
      <p>The page you are looking for does not exist.</p>
    </Container>
  )
}

export default NotFound
