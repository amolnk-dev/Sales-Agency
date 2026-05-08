"use client"

import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "Team delivered our MVP on time. The communication throughout the project was excellent.",
    name: "Marc S, CTO",
  },
  {
    quote:
      "Measurable results were delivered seamlessly through well executed automation strategies.",
    name: "Nore Yajdani, CEO",
  },
  {
    quote:
      "They operate at a true 10x level, delivering exceptional results through smart automation.",
    name: "Dr. Anup Kelgaonkar, Author",
  },
  {
    quote:
      "Their team built our platform efficiently with exceptional quality and a smooth, impactful experience.",
    name: "Dipesh Agarwal, COO",
  },
  {
    quote:
      "Performed at a high automation level, achieving strong results through optimized processes.",
    name: "Gaglani Parth, Founder",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Testimonials
          </h2>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 animate-scroll">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-card border-border min-w-[320px] max-w-[320px] h-[260px] flex-shrink-0"
              >
                <CardContent className="pt-8 h-full flex flex-col justify-between">
                  <div>
                    <p className="text-foreground text-lg mb-6 leading-relaxed">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </div>

                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 12s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}