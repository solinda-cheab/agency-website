import Container from '../components/common/Container'
import Button from '../components/common/Button'

function Home() {
  return (
    <Container style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <h1>We build modern digital experiences.</h1>
      <p>Strategy, design, and development for ambitious brands.</p>
      <Button>Book a Discovery Call</Button>
    </Container>
  )
}

export default Home
