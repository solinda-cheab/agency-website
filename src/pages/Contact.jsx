import { useState } from 'react'
import Container from '../components/common/Container'
import SEO from '../components/common/SEO'
import Button from '../components/common/Button'
import { seoData } from '../config/seoData'

const initialForm = { firstName: '', lastName: '', email: '', message: '' }

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | success

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleContactSubmit(e) {
    e.preventDefault()
    // Wire this up to your form-handling / API layer when ready.
    setStatus('success')
    setForm(initialForm)
  }

  return (
    <Container style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <SEO config={seoData.contact} />
      {/* CONTACT SECTION */}
      <section id="contact" className="w-full bg-white text-[#0052cc] pt-24 pb-0 px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-3xl italic font-light opacity-60">05</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase">Contact Us</h2>
            </div>
            <p className="text-lg leading-relaxed opacity-80 max-w-md">
              Have a project in mind or need our expertise? Reach out to us for a consultation
              today, and our team will get back to you shortly.
            </p>
          </div>
          <div>
            {status === 'success' ? (
              <div className="rounded-2xl border border-[#0052cc]/20 bg-[#f5f8ff] p-8">
                <h3 className="text-2xl font-bold mb-2">Thanks, message sent!</h3>
                <p className="opacity-80 mb-6">
                  We've received your message and will be in touch soon.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="text-sm font-semibold uppercase tracking-wide underline underline-offset-4 hover:text-[#ff7e1a]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <label className="block text-xs font-bold uppercase mb-2 opacity-60">First name *</label>
                    <input
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      className="w-full bg-transparent border-0 border-b border-[#0052cc] py-2 focus:ring-0 focus:border-[#ff7e1a] outline-none"
                      type="text"
                      required
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-xs font-bold uppercase mb-2 opacity-60">Last name *</label>
                    <input
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      className="w-full bg-transparent border-0 border-b border-[#0052cc] py-2 focus:ring-0 focus:border-[#ff7e1a] outline-none"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-xs font-bold uppercase mb-2 opacity-60">Email *</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b border-[#0052cc] py-2 focus:ring-0 focus:border-[#ff7e1a] outline-none"
                    type="email"
                    required
                  />
                </div>
                <div className="relative">
                  <label className="block text-xs font-bold uppercase mb-2 opacity-60">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="3"
                    className="w-full bg-transparent border-0 border-b border-[#0052cc] py-2 focus:ring-0 focus:border-[#ff7e1a] outline-none resize-none"
                  />
                </div>
                <Button type="submit" full>
                  Submit
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Contact