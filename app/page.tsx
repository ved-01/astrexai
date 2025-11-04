'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight-aceternity"
import { 
  Brain, 
  Workflow, 
  Database, 
  Zap,
  ArrowRight,
  CheckCircle2,
  Mail,
  Linkedin
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory bg-black">
      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center overflow-x-hidden overflow-y-visible bg-black/[0.96] snap-start">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        
        <div className="w-full flex flex-col lg:flex-row min-h-screen">
          {/* Left content */}
          <div className="w-full lg:w-1/2 py-20 px-6 md:px-12 lg:px-16 relative z-10 flex flex-col justify-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold metal-text leading-tight">
              Astrex AI
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-300 mt-6">
              We build AI Agents that saves you time
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button 
                size="lg" 
                className="rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-md text-lg px-8"
                asChild
              >
                <Link href="/about#contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                className="rounded-full bg-white text-black hover:bg-neutral-200 text-lg px-8"
                asChild
              >
                <a href="https://calendly.com/ved-at-work-mail/30min" target="_blank" rel="noopener noreferrer">Book a Consultation</a>
              </Button>
            </div>
          </div>

          {/* Right content - 3D Robot Scene (Full Width, No Constraints) */}
          <div className="w-full lg:w-1/2 relative h-[600px] lg:h-screen overflow-visible">
            <div className="absolute top-0 bottom-0 right-0 -left-[10%] w-[120%] h-full">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-b from-black to-neutral-900 snap-start py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              What We Do
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              End-to-end AI solutions specific to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group bg-neutral-900/50 border-neutral-800 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/40 hover:bg-neutral-900/80">
              <CardHeader className="items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/10">
                  <Brain className="h-8 w-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-white">AI Process Audits</CardTitle>
                <CardDescription className="text-neutral-400 text-sm md:text-base">
                  Identify automation opportunities and optimize your workflows with AI-powered insights
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="group bg-neutral-900/50 border-neutral-800 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:bg-neutral-900/80">
              <CardHeader className="items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10">
                  <Workflow className="h-8 w-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-white">Agentic Systems</CardTitle>
                <CardDescription className="text-neutral-400 text-sm md:text-base">
                  Build intelligent AI agents that autonomously handle complex tasks and decisions
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="group bg-neutral-900/50 border-neutral-800 backdrop-blur-sm transition-all duration-300 hover:border-green-400/40 hover:bg-neutral-900/80">
              <CardHeader className="items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                  <Database className="h-8 w-8 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-white">Custom RAG & NL2SQL</CardTitle>
                <CardDescription className="text-neutral-400 text-sm md:text-base">
                  Deploy retrieval systems and natural language database interfaces
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="group bg-neutral-900/50 border-neutral-800 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/40 hover:bg-neutral-900/80">
              <CardHeader className="items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/10">
                  <Zap className="h-8 w-8 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-white">Workflow Automation</CardTitle>
                <CardDescription className="text-neutral-400 text-sm md:text-base">
                  Streamline operations with intelligent automation and optimization
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative min-h-screen flex items-center bg-neutral-900 snap-start py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Real stories, real results
            </h2>
            <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto">
              What partners say about working with Astrex AI.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto bg-black/50 border-transparent backdrop-blur-2xl transition-all duration-500 hover:bg-white/10 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] hover:border-white/10 group">
            <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-1">
                <CardTitle className="text-2xl text-white">Sasi Reddy</CardTitle>
                <CardDescription className="text-neutral-300 text-sm md:text-base">
                  Founder & CEO at Finthos · <a href="https://finthos.ai" target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-4 hover:underline">finthos.ai</a>
                </CardDescription>
              </div>
              <div className="text-neutral-400 text-xs md:text-sm whitespace-nowrap">
                October 12, 2025 · Ved’s client
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-neutral-300 text-sm md:text-base leading-relaxed">
              <p>
                I had the pleasure of working with Ved on the early-stage development of the Finthos app, where he played a key role in building the foundation of our personal finance platform.
              </p>
              <p>
                Ved brought strong technical skills across backend, API integration, and front-end setup using low-code tools. He also contributed to AI prompt tuning and helped us connect backend logic to AI workflows in a meaningful way.
              </p>
              <p>
                His ability to understand product requirements and translate them into functional components was impressive, particularly given the fast-paced and evolving nature of an early-stage startup.
              </p>
              <p>
                I appreciated his responsiveness and ability to work independently while staying aligned with the vision. I’m excited to see where he applies his skills next.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative min-h-screen flex flex-col justify-between bg-gradient-to-b from-neutral-900 to-black snap-start py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8 flex-1 flex items-center">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h2 className="gradient-text text-3xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap">
              Ready to build your AI system?
            </h2>
            <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
              Let's discuss how we can transform your business with intelligent automation
            </p>
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-neutral-200 text-base md:text-lg px-10 md:px-12 py-5 md:py-6 h-auto"
              asChild
            >
              <a href="https://calendly.com/ved-at-work-mail/30min" target="_blank" rel="noopener noreferrer">
                Let's Chat
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 pb-4">
          <div className="border-t border-neutral-800 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-neutral-400 text-xs md:text-sm">
            <div className="space-y-2">
              <a href="mailto:ved.at.work.mail@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors whitespace-nowrap">
                <Mail className="h-4 w-4" />
                ved.at.work.mail@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/ved-vekhande/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors whitespace-nowrap">
                <Linkedin className="h-4 w-4" />
                linkedin.com/in/ved-vekhande
              </a>
            </div>
            <div className="md:text-right">
              <a href="https://www.linkedin.com/company/astrexai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors md:justify-end whitespace-nowrap">
                <Linkedin className="h-4 w-4" />
                Astrex AI on LinkedIn
              </a>
            </div>
          </div>
          <p className="mt-4 text-center text-neutral-500 text-xs md:text-sm">
            Astrex AI @ 2025
          </p>
        </div>
      </section>
    </main>
  )
}


