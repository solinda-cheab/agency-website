import Container from '../components/common/Container'
import SEO from '../components/common/SEO'
import SectionTitle from '../components/common/SectionTitle'

function Privacy() {
  return (
    <Container style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <SEO
        config={{
          title: 'Privacy Policy',
          description: 'How CSLD&CPSRY collects, uses, and protects your information.',
        }}
      />
      <section className="w-full bg-white text-[#0052cc] py-20 px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <SectionTitle number="06" title="Privacy Policy" className="mb-12" />
          <div className="border-t border-dashed border-[#0052cc]/30 mb-12" />
          <div className="space-y-8 text-slate-700 leading-relaxed">
            <p>
              We collect only the information you choose to share with us, such as your name,
              email address, and message, when you fill out a form on this site.
            </p>
            <div>
              <h3 className="text-xl font-bold text-[#0052cc] mb-2">How we use it</h3>
              <p>
                Your information is used solely to respond to your inquiry and, where relevant,
                to keep you updated on the project you've engaged us for. We never sell your
                data to third parties.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0052cc] mb-2">Your choices</h3>
              <p>
                You can ask us to update or delete any information we hold about you at any
                time by reaching out through our contact page.
              </p>
            </div>
            <p className="text-sm opacity-60">Last updated: July 2026.</p>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Privacy
