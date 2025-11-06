'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Target, 
  Code2, 
  Scale,
  Search,
  Lightbulb,
  Hammer,
  Rocket,
  RefreshCw,
  Mail,
  ArrowUpRight,
  CheckCircle2
} from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

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
    <main className="min-h-[100dvh] overflow-y-auto snap-y snap-mandatory bg-black pt-16">
      {/* About Astrex AI Section */}
      <section className="relative min-h-[calc(100dvh-4rem)] flex items-center bg-gradient-to-b from-black to-neutral-900 snap-start py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
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
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative min-h-[100dvh] flex items-center bg-neutral-900 snap-start py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Why Choose Us
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Three pillars that set us apart
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                  No prototypes, no experiments—just production-grade solutions.
                </p>
              </CardContent>
            </Card>
            
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
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="relative min-h-[100dvh] flex items-center bg-gradient-to-b from-neutral-900 to-black snap-start py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10 space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Our Process
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              A systematic approach to AI transformation
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="relative flex gap-4 md:gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-semibold text-base">
                    1
                  </div>
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-purple-500 to-blue-500 mt-3"></div>
                </div>
                <Card className="flex-1 bg-neutral-900/50 border-neutral-800 group-hover:bg-neutral-900/80 transition-all">
                  <CardHeader className="py-4">
                    <div className="flex items-center gap-2">
                      <Search className="h-5 w-5 text-purple-400" />
                      <CardTitle className="text-white text-lg">Discovery</CardTitle>
                    </div>
                    <CardDescription className="text-neutral-400 text-sm md:text-base mt-2 leading-relaxed">
                      We analyze your current processes, identify pain points, and uncover automation opportunities. 
                      Deep-dive workshops help us understand your unique challenges.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>

              {/* Step 2 */}
              <div className="relative flex gap-4 md:gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold text-base">
                    2
                  </div>
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-blue-500 to-green-500 mt-3"></div>
                </div>
                <Card className="flex-1 bg-neutral-900/50 border-neutral-800 group-hover:bg-neutral-900/80 transition-all">
                  <CardHeader className="py-4">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-blue-400" />
                      <CardTitle className="text-white text-lg">Blueprint</CardTitle>
                    </div>
                    <CardDescription className="text-neutral-400 text-sm md:text-base mt-2 leading-relaxed">
                      We design a comprehensive solution architecture tailored to your needs. 
                      Clear documentation, technical specifications, and implementation roadmap.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>

              {/* Step 3 */}
              <div className="relative flex gap-4 md:gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-semibold text-base">
                    3
                  </div>
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-green-500 to-yellow-500 mt-3"></div>
                </div>
                <Card className="flex-1 bg-neutral-900/50 border-neutral-800 group-hover:bg-neutral-900/80 transition-all">
                  <CardHeader className="py-4">
                    <div className="flex items-center gap-2">
                      <Hammer className="h-5 w-5 text-green-400" />
                      <CardTitle className="text-white text-lg">Build</CardTitle>
                    </div>
                    <CardDescription className="text-neutral-400 text-sm md:text-base mt-2 leading-relaxed">
                      Our engineers develop your custom AI system using best practices. 
                      Iterative development with regular check-ins and demonstrations.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>

              {/* Step 4 */}
              <div className="relative flex gap-4 md:gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center text-white font-semibold text-base">
                    4
                  </div>
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-yellow-500 to-orange-500 mt-3"></div>
                </div>
                <Card className="flex-1 bg-neutral-900/50 border-neutral-800 group-hover:bg-neutral-900/80 transition-all">
                  <CardHeader className="py-4">
                    <div className="flex items-center gap-2">
                      <Rocket className="h-5 w-5 text-yellow-400" />
                      <CardTitle className="text-white text-lg">Deploy</CardTitle>
                    </div>
                    <CardDescription className="text-neutral-400 text-sm md:text-base mt-2 leading-relaxed">
                      Smooth integration into your existing infrastructure. 
                      Comprehensive testing, training, and support during rollout.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>

              {/* Step 5 */}
              <div className="relative flex gap-4 md:gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-semibold text-base">
                    5
                  </div>
                </div>
                <Card className="flex-1 bg-neutral-900/50 border-neutral-800 group-hover:bg-neutral-900/80 transition-all">
                  <CardHeader className="py-4">
                    <div className="flex items-center gap-2">
                      <RefreshCw className="h-5 w-5 text-orange-400" />
                      <CardTitle className="text-white text-lg">Maintain</CardTitle>
                    </div>
                    <CardDescription className="text-neutral-400 text-sm md:text-base mt-2 leading-relaxed">
                      Ongoing optimization, monitoring, and support. 
                      We ensure your AI systems evolve with your business needs.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="relative min-h-[100dvh] flex items-center bg-black snap-start py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-1 gap-8 place-items-center">
            {/* Ved */}
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

            
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative min-h-[100dvh] flex items-center bg-black snap-start py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Let&rsquo;s Talk
              </h2>
              <p className="text-xl text-neutral-400">
                Ready to transform your business with AI? Get in touch.
              </p>
            </div>
            
            <Card className="bg-neutral-900/50 border-neutral-800 backdrop-blur-sm">
              <CardContent className="pt-6">
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
          </div>
        </div>
      </section>
    </main>
  )
}

