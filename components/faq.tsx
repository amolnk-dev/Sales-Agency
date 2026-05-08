"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does it take to develop a web or mobile application?",
    answer: "Timeline for web or mobile app development depends on the project complexity. Simple webapp or MVP can take 4 to 6 weeks, while a scalable SaaS platform or full featured mobileapp may take upto 9+ weeks. We provide a clear development roadmap and timeline after 1:1"
  },
  {
    question: "What technologies and frameworks do you use for development?",
    answer: "We specialize in modern, technologies including React.js, Next.js, Node.js, Python, and cloud based architectures. For mobileapp, we use Swift and Kotlin. Our goal is to choose the most scalable, secure, and SEO friendly tech stack tailored to your business."
  },
  {
    question: "Do you work with startups, small businesses, and enterprises?",
    answer: "Yes, we work with both. Whether you need an MVP for a startup or you need for growing business. We deliver scalable digital solutions that supports for growth."
  },
  {
    question: "Do you provide ongoing support, maintenance, and scaling services?",
    answer: "Absolutely. After project delivery, we offer ongoing maintenance, performance optimization, security updates, and feature enhancements. We help you scale your application, improve user experience, and maintain a strong online presence in competitive markets."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            FAQs
          </h2>
          <p className="text-muted-foreground text-lg">
            Get answers to common questions about development, timelines, and technologies.
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