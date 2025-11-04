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
  Mail
} from "lucide-react"
import { useState } from "react"

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory bg-black pt-16">
      {/* About Astrex AI Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-b from-black to-neutral-900 snap-start py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              About Astrex AI
            </h1>
            
            <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
              <p>
                <span className="text-white font-semibold">Astrex AI</span> blends deep AI expertise with production-grade engineering to build autonomous systems that adapt, scale, and deliver measurable outcomes tailored to your operation.
              </p>

              <p className="text-xl text-white font-medium pt-4">
                From initial discovery to long-term optimization, we're your partner in AI transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative min-h-screen flex items-center bg-neutral-900 snap-start py-24">
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
      <section className="relative min-h-screen flex items-center bg-gradient-to-b from-neutral-900 to-black snap-start py-16">
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

      {/* Contact Section */}
      <section id="contact" className="relative min-h-screen flex items-center bg-black snap-start py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Let's Talk
              </h2>
              <p className="text-xl text-neutral-400">
                Ready to transform your business with AI? Get in touch.
              </p>
            </div>
            
            <Card className="bg-neutral-900/50 border-neutral-800 backdrop-blur-sm">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-neutral-300">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-black/50 border-neutral-700 text-white placeholder:text-neutral-500"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-neutral-300">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-black/50 border-neutral-700 text-white placeholder:text-neutral-500"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-neutral-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-black/50 border-neutral-700 text-white placeholder:text-neutral-500 min-h-[150px]"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg" 
                    className="w-full bg-white text-black hover:bg-neutral-200 text-base"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

