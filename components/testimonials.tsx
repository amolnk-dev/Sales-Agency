"use client"

import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "Exceptional team that delivered our MVP on time with outstanding communication throughout the project lifecycle.",
    name: "Marc S, CTO",
    company: "Tech Innovation Studio"
  },
  {
    quote:
      "Outstanding results delivered seamlessly through expertly executed automation strategies and strategic implementation.",
    name: "Nore Yajdani, CEO",
    company: "Digital Growth Partners"
  },
  {
    quote:
      "Operates at an exceptional level, delivering transformative results through intelligent automation and strategic optimization.",
    name: "Dr. Anup Kelgaonkar, Author",
    company: "Innovation Research Institute"
  },
  {
    quote:
      "Built our platform efficiently with exceptional quality, superior user experience, and professional execution throughout.",
    name: "Dipesh Agarwal, COO",
    company: "Enterprise Solutions Ltd"
  },
  {
    quote:
      "Demonstrated advanced expertise in automation, achieving impressive results through optimized processes and innovation.",
    name: "Gaglani Parth, Founder",
    company: "Startup Ventures"
  },
  {
    quote:
      "Professional team that understands business needs and translates them into high-quality digital solutions with precision.",
    name: "Sarah Johnson, Product Lead",
    company: "SaaS Innovations"
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-4 overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-widest mb-4">
            Client Success Stories
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover how businesses achieve measurable success through our innovative solutions and expert guidance.
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 animate-scroll">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-card border border-border min-w-[340px] max-w-[340px] h-[280px] flex-shrink-0 hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="pt-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: "#003D82" }}
                        />
                      ))}
                    </div>
                    <p className="text-foreground text-base leading-relaxed">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 18s linear infinite;
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
