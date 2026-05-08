"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Marquee } from "@/components/marquee"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { Check } from "lucide-react"

const ACCENT = "#FF8C00"

type Plan = {
  name: string
  price: string
  description: string
  formUrl: string
  features: string[]
}

type PricingGroup = {
  service: string
  plans: Plan[]
}

const pricingPlans: PricingGroup[] = [
  {
    service: "Automation",
    plans: [
      {
        name: "Starter Plan",
        price: "$1,500",
        description: "Workflow automation solutions for startups and small businesses",
        formUrl:
          "https://docs.google.com/forms/d/e/1FAIpQLSd7o6blY4Sj9IEo-x6rCLmcGChjYPIiLDbVa7hQQ3YxSlYg5w/viewform?embedded=true",
        features: [
          "Up to five automated workflows",
          "Email support",
          "Updates",
          "Integrations",
        ],
      },
      {
        name: "Growth Plan",
        price: "$8,000+",
        description: "Advanced automation with custom integrations for scaling businesses",
        formUrl:
          "https://docs.google.com/forms/d/e/1FAIpQLScDgrbCXVeYF0Hd1cZCM5eysXRDuLStWsdQUN8TCtkIFPpXVQ/viewform?embedded=true",
        features: [
          "Unlimited workflows",
          "Priority support",
          "Custom API integrations",
          "Advanced automation systems",
          "Ongoing optimization",
        ],
      },
    ],
  },
  {
    service: "AI Agent Development",
    plans: [
      {
        name: "Advanced AI Agent",
        price: "Custom",
        description: "Customized AI agents for business support, and operations",
        formUrl:
          "https://docs.google.com/forms/d/e/1FAIpQLSeIfVam_o1H4GxOkWxdJFX19K_zRF8-kHIxZ77UzhcSTHTD6w/viewform?embedded=true",
        features: [
          "Multi task capabilities",
          "Custom training on your data",
          "Advanced analytics dashboard",
          "Priority support",
          "Continuous learning models",
        ],
      },
    ],
  },
  {
    service: "MobileApp Development",
    plans: [
      {
        name: "iOS & Android",
        price: "Custom",
        description: "High performance cross platform mobileapp services",
        formUrl:
          "https://docs.google.com/forms/d/e/1FAIpQLSfx9iyAiZBKm-QUuTfWr6m6rPEHyDs-BUaR20_Zy2jE0052Yw/viewform?embedded=true",
        features: [
          "iOS & Android compatibility",
          "App Store & Play Store deployment",
          "Bug fixing",
          "Post launch maintenance",
          "Scalable architecture",
        ],
      },
    ],
  },
  {
    service: "Reddit Marketing",
    plans: [
      {
        name: "Growth Plan",
        price: "$3,000/month",
        description: "Boost brand visibility with 100K+ targeted Reddit impressions",
        formUrl:
          "https://docs.google.com/forms/d/e/1FAIpQLSfNGeFtsUnEAHO3n5lneMCZdonETuRcdDZ1H7ELa5gK9qk_UA/viewform?embedded=true",
        features: [
          "Strategic posts for ideal customers",
          "External comments to boost visibility",
          "ICP and subreddit analysis",
          "Fast execution weeks, not months",
        ],
      },
      {
        name: "Premium Plan",
        price: "$5,000/month",
        description: "Scale your online presence with 200K+ impressions and brand authority",
        formUrl:
          "https://docs.google.com/forms/d/e/1FAIpQLSfvpUTB0oGOsVI6J7MqpdYZgpSj96Y4Ni4q8Srwa7XtG36IGA/viewform?embedded=true",
        features: [
          "Everything for Growth",
          "Brand reputation management",
          "AI & LLM visibility optimization",
          "Negative review removal & control",
          "Dedicated account manager",
        ],
      },
    ],
  },
]

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeForm, setActiveForm] = useState("")

  const handleContact = (formUrl: string) => {
    if (!formUrl) return
    setActiveForm(formUrl)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setActiveForm("")
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Process />

      <section id="pricing" className="py-24 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-sm font-medium uppercase" style={{ color: ACCENT }}>
              Pricing
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Select your plan
            </h1>

            <p className="text-muted-foreground max-w-3xl mx-auto">
              Transparent pricing. No hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((group, i) =>
              group.plans.map((plan, j) => (
                <div
                  key={`${i}-${j}`}
                  onClick={() => handleContact(plan.formUrl)}
                  className="relative bg-card border rounded-2xl p-6 hover:shadow-xl hover:scale-105 cursor-pointer transition min-h-[320px] flex flex-col"
                >
                  <div className="text-xs mb-2 uppercase tracking-wide" style={{ color: ACCENT }}>
                    {group.service}
                  </div>

                  <h2 className="text-lg font-bold mb-1">{plan.name}</h2>

                  <p className="text-muted-foreground text-sm mb-4">
                    {plan.description}
                  </p>

                  <div className="text-3xl font-bold mb-4" style={{ color: ACCENT }}>
                    {plan.price}
                  </div>

                  <ul className="space-y-2 mb-10">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-2 text-sm">
                        <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: ACCENT }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <span
                    className="absolute bottom-5 right-6 text-sm font-medium uppercase tracking-wide"
                    style={{ color: ACCENT }}
                  >
                    click→
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <Marquee />
      <Testimonials />
      <FAQ />
      <Footer />

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-card p-4 rounded-xl w-full max-w-3xl shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={activeForm}
              width="100%"
              height="600"
              className="rounded-lg"
              title="Contact Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      )}
    </main>
  )
}
