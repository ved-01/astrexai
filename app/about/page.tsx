'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Target, 
  Code2, 
  Scale,
  Mail,
  ArrowUpRight,
  CheckCircle2
} from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"
import SiddheswarImg from "@/components/assets/siddheswar.png"
import { motion } from "framer-motion"

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    linkedin: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  // After success, show an animation briefly, then return to a fresh form
  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => setStatus('idle'), 2200)
      return () => clearTimeout(timer)
    }
  }, [status])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    // Prefer env override if provided, else use the supplied endpoint
    const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xvgvjnnn'

    try {
      const res = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          linkedin: formData.linkedin || undefined
        })
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '', linkedin: '' })
      } else {
        const data = await res.json().catch(() => null)
        setStatus('error')
        setErrorMessage(data?.error || 'Failed to submit. Please try again later.')
      }
    } catch (err) {
      setStatus('error')
      setErrorMessage('Network error. Please try again later.')
    }
  }

  return (
    <main className="min-h-[100dvh] overflow-y-auto snap-y snap-mandatory pt-16 bg-[linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgb(23,23,23)_25%,rgba(255,255,255,0.08)_50%,rgb(23,23,23)_75%,rgba(0,0,0,1)_100%)]">
      {/* About Astrex AI Section */}
      <section className="relative min-h-[calc(100dvh-4rem)] flex items-center snap-start py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-7xl font-bold metal-text">
              About Astrex AI
            </h1>
            
            <div className="mt-7 md:mt-9 space-y-6 md:space-y-7 text-xl md:text-2xl text-neutral-300 leading-relaxed">
              <p className="text-lg md:text-xl">
                <span className="text-white font-semibold">Astrex AI</span> blends deep AI expertise with production-grade engineering to build autonomous systems that adapt, scale, and deliver measurable outcomes tailored to your operation.
              </p>

              <p className="text-2xl text-white font-semibold pt-4">
                From initial discovery to long-term optimization, we&rsquo;re your
                <br />
                partner in <span className="gradient-text">AI transformation</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative min-h-[100dvh] flex items-center snap-start py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16 space-y-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Why Choose Us
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Three pillars that set us apart
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            >
              <Card className="bg-black/50 border-neutral-800 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-500/10 flex items-center justify-center">
                    <Target className="h-8 w-8 text-purple-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">Production-Ready Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-400 text-center leading-relaxed">
                    We build robust, scalable AI systems that are ready for real-world deployment from day one. 
                    No experiments just production grade solutions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <Card className="bg-black/50 border-neutral-800 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-500/10 flex items-center justify-center">
                    <Code2 className="h-8 w-8 text-blue-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">Custom Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-400 text-center leading-relaxed">
                    Leveraging LangGraph, LangChain, n8n, and modern frameworks, we design systems 
                    tailored to your specific needs and constraints.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
              <Card className="bg-black/50 border-neutral-800 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-green-500/20 to-green-500/10 flex items-center justify-center">
                    <Scale className="h-8 w-8 text-green-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">Scalable Engineering</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-400 text-center leading-relaxed">
                    Our solutions are built to scale. Clean code, maintainable architecture, 
                    and systems designed to grow with your business.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="relative min-h-[100dvh] flex items-center snap-start py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-1 gap-8 place-items-center">
            {/* Ved */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full flex justify-center"
            >
              <Card className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[22px] px-6 py-8 md:px-8 md:py-10 w-full max-w-4xl">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                <div className="relative flex-shrink-0 w-32 h-32 md:w-56 md:h-56 overflow-hidden rounded-[16px] border border-white/15 bg-black shadow-[0_10px_26px_-18px_rgba(0,0,0,0.7)]">
                  <Image
                    src="images/vedvekhande.png"
                    alt="Ved Vekhande"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="flex-1 space-y-3 text-center md:text-left">
                  <div className="space-y-1">
                    <h3 className="text-2xl md:text-3xl font-semibold text-white">Ved Vekhande</h3>
                    <p className="text-sm md:text-base text-neutral-400">Founder</p>
                  </div>
                  <p className="text-neutral-300 max-w-2xl text-sm leading-relaxed">
                    I build AI agents that scale into production, blending strategy, engineering, and rapid experimentation.
                  </p>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <Button className="rounded-full bg-white text-black hover:bg-neutral-200 px-4 py-2 h-auto text-xs md:text-sm" asChild>
                      <a href="https://www.linkedin.com/in/ved-vekhande/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                    <Button className="rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-md px-4 py-2 h-auto text-xs md:text-sm" asChild>
                      <a href="mailto:ved.at.work.mail@gmail.com">Email</a>
                    </Button>
                  </div>
                </div>
              </div>
              </Card>
            </motion.div>

            {/* Siddeshwar */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
              className="w-full flex justify-center"
            >
              <Card className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[22px] px-6 py-8 md:px-8 md:py-10 w-full max-w-4xl">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                <div className="relative flex-shrink-0 w-32 h-32 md:w-56 md:h-56 overflow-hidden rounded-[16px] border border-white/15 bg-black shadow-[0_10px_26px_-18px_rgba(0,0,0,0.7)]">
                  <Image
                    src={SiddheswarImg}
                    alt="Siddeshwar Lachyane"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="flex-1 space-y-3 text-center md:text-left">
                  <div className="space-y-1">
                    <h3 className="text-2xl md:text-3xl font-semibold text-white">Siddheshwar Lachyane</h3>
                    <p className="text-sm md:text-base text-neutral-400">Co-founder</p>
                  </div>
                  <p className="text-neutral-300 max-w-2xl text-sm leading-relaxed">
                    Focused on building robust AI systems and delivering measurable product impact.
                  </p>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <Button className="rounded-full bg-white text-black hover:bg-neutral-200 px-4 py-2 h-auto text-xs md:text-sm" asChild>
                      <a href="https://www.linkedin.com/in/siddheswar-lachyane/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                    <Button className="rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-md px-4 py-2 h-auto text-xs md:text-sm" asChild>
                      <a href="mailto:sidlachyane06@gmail.com">Email</a>
                    </Button>
                  </div>
                </div>
              </div>
              </Card>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative min-h-[80dvh] flex items-center snap-start py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-xl mx-auto">
            <motion.div
              className="text-center mb-8 space-y-4"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Let&rsquo;s Talk
              </h2>
              <p className="text-xl text-neutral-400">
                Ready to transform your business with AI? Get in touch.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Card className="bg-neutral-900/50 border-neutral-800 backdrop-blur-sm">
                <CardContent className="pt-4">
                {status === 'success' ? (
                  <div className="text-center py-14 space-y-3 animate-in fade-in-0 zoom-in-95 duration-700">
                    <div className="mx-auto h-16 w-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                      <CheckCircle2 className="h-9 w-9 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Thanks! Your message was sent.</h3>
                    <p className="text-neutral-400">We’ll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-neutral-300">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-black/50 border-neutral-700 text-white placeholder:text-neutral-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-neutral-300">
                        Email (required)
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-black/50 border-neutral-700 text-white placeholder:text-neutral-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="linkedin" className="text-sm font-medium text-neutral-300">
                        LinkedIn (optional)
                      </label>
                      <Input
                        id="linkedin"
                        name="linkedin"
                        type="url"
                        placeholder="https://www.linkedin.com/in/your-profile"
                        value={formData.linkedin}
                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                        className="bg-black/50 border-neutral-700 text-white placeholder:text-neutral-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-neutral-300">
                        Message (required)
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-black/50 border-neutral-700 text-white placeholder:text-neutral-500 min-h-[150px]"
                        required
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-sm text-red-400">{errorMessage}</p>
                    )}
                    
                    <Button 
                      type="submit"
                      size="lg" 
                      className="w-full bg-white text-black hover:bg-neutral-200 text-base"
                      disabled={status === 'loading'}
                    >
                      {status === 'loading' ? 'Sending…' : 'Send Message'}
                    </Button>
                  </form>
                )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

