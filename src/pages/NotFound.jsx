import { useNavigate } from 'react-router-dom'
import Container from '../components/common/Container'
import SEO from '../components/common/SEO'
import Button from '../components/common/Button'

function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="w-full min-h-[70vh] bg-white flex items-center">
      <SEO
        config={{
          title: "Page Not Found",
          description: "The page you are looking for does not exist.",
        }}
      />
      <Container className="text-center py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ff7e1a] mb-4">
          Error 404
        </p>
        <h1 className="hero-title text-[#0052cc] text-6xl sm:text-8xl uppercase mb-6 leading-none">
          Lost the Plot?
        </h1>
        <p className="mx-auto max-w-xl text-base sm:text-lg text-[#1d3557] mb-10">
          The page you're looking for doesn't exist, moved, or never did. Let's get you back
          on track.
        </p>
        <Button onClick={() => navigate('/')}>Back to Home</Button>
      </Container>
    </div>
  )
}

export default NotFound