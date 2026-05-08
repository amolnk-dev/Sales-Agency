"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is the typical timeline for web and mobile app development?",
    answer: "Development timelines vary based on project complexity and scope. A minimum viable product (MVP) typically requires 4-6 weeks for web applications, while comprehensive enterprise solutions and fully-featured mobile apps may require 9-16 weeks. We provide a detailed project roadmap and realistic timeline estimates following our initial discovery consultation."
  },
  {
    question: "Which technologies and frameworks do you implement?",
    answer: "We specialize in modern, enterprise-grade technologies including React.js, Next.js, Node.js, Python, and scalable cloud architectures. For mobile development, we utilize Swift for iOS and Kotlin for Android. Our approach is to select the optimal technology stack that ensures scalability, security, SEO optimization, and long-term maintainability aligned with your business requirements."
  },
  {
    question: "Do you partner with startups, SMBs, and enterprise organizations?",
    answer: "Absolutely. We successfully partner with startups seeking MVP development, growing businesses requiring scalable solutions, and large enterprises needing digital transformation. Our portfolio spans diverse industries, and we deliver customized digital solutions that scale with your organization's growth trajectory."
  },
  {
    question: "What post-launch support and scaling services are available?",
    answer: "We offer comprehensive post-launch support including ongoing maintenance, proactive security updates, performance optimization, feature enhancement, and strategic scaling services. Our team ensures your application maintains peak performance, remains secure against emerging threats, and continues delivering exceptional user experiences as your business expands."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Find comprehensive answers to common questions about development methodologies, technology platforms, timelines, and enterprise services.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
