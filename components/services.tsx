"use client"

import { Cog, Bot, Smartphone, Globe, MessageSquare, Palette } from "lucide-react"

const services = [
  {
    icon: Cog,
    title: "Intelligent Automation",
    description:
      "Streamline operations with intelligent workflow automation to enhance productivity, reduce costs, and eliminate manual tasks for maximum efficiency.",
  },
  {
    icon: Bot,
    title: "AI Agents & Integration",
    description:
      "Deploy sophisticated AI agents and seamless integrations to automate customer support, enable data analytics, and execute complex business processes.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Transform your vision into reality with high-performance native and cross-platform iOS and Android applications engineered for excellence.",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "Create fast, secure, and responsive web applications optimized for performance, user engagement, conversion rates, and digital visibility.",
  },
  {
    icon: MessageSquare,
    title: "Enterprise Solutions",
    description:
      "Deliver comprehensive enterprise solutions and strategic implementation services that optimize operations and accelerate business transformation.",
  },
  {
    icon: Palette,
    title: "Digital Marketing Strategy",
    description:
      "Drive sustainable growth with data-driven digital marketing strategies, content optimization, and targeted campaigns across all channels.",
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Comprehensive Service Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Advanced AI development and strategic digital marketing services designed to accelerate business momentum and drive measurable success.
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
