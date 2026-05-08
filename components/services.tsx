"use client"

import { Cog, Bot, Smartphone, Globe, MessageSquare, Palette } from "lucide-react"

const services = [
  {
    icon: Cog,
    title: "Automation",
    description:
      "Customized workflow automation solutions to boost productivity, efficiency, and reduce repetitive tasks.",
  },
  {
    icon: Bot,
    title: "AI Agent & Integration",
    description:
      "Deploy agents and integrations to automate support, analyze data, and execute complex tasks.",
  },
  {
    icon: Smartphone,
    title: "MobileApp Development",
    description:
      "Turn your idea into reality with high performance native and cross platform iOS Android development solutions.",
  },
  {
    icon: Globe,
    title: "WebApp Development",
    description:
      "Build fast, secure, responsive webapp for performance, engagement, conversions, and online visibility growth.",
  },
  {
    icon: MessageSquare,
    title: "Reddit Marketing",
    description:
      "We manage everything you simply approve optimized content and watch your business revenue grow fast.",
  },
  {
    icon: Palette,
    title: "Hire Freelancers",
    description:
      "Stunning animation and video editing content that captures attention, tells your story, and drives real results.",
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Offering
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            AI development and Digital marketing to help your business move faster.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group cursor-pointer h-full flex flex-col"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}