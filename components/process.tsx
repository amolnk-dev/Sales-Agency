"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: 1,
    title: "Discovery",
    description:
      "We learn about your business, goals, and what success looks like for you",
  },
  {
    number: 2,
    title: "Planning",
    description:
      "Our team maps out the technical approach, timeline, and deliverables",
  },
  {
    number: 3,
    title: "Development",
    description:
      "We build your solution with regular check-ins and progress updates",
  },
  {
    number: 4,
    title: "Testing",
    description:
      "Thorough quality checks to ensure everything works as expected",
  },
  {
    number: 5,
    title: "Delivery",
    description:
      "We launch your project and provide support to keep things running smoothly",
  },
]

const journeySteps = [
  "Share your project requirements with us",
  "Get a proposal with accurate pricing",
  "Work directly with our development team",
  "Launch with confidence and ongoing support",
]

export function Process() {
  useEffect(() => {
    ; (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) {
        a.q.push(ar)
      }
      let d = document

      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal
          let ar = arguments

          if (!cal.loaded) {
            cal.ns = {}
            cal.q = cal.q || []
            let script = d.createElement("script")
            script.src = A
            d.head.appendChild(script)
            cal.loaded = true
          }

          if (ar[0] === L) {
            const api = function () {
              p(api, arguments)
            }

            const namespace = ar[1]
            api.q = api.q || []

            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api
              p(cal.ns[namespace], ar)
              p(cal, ["initNamespace", namespace])
            } else {
              p(cal, ar)
            }
            return
          }

          p(cal, ar)
        }
    })(window, "https://app.cal.com/embed/embed.js", "init")

    // ✅ Initialize NEW Cal (25m)
    window.Cal("init", "25m", { origin: "https://app.cal.com" })

    // ✅ Floating Button
    window.Cal.ns["25m"]("floatingButton", {
      calLink: "diptisuryavanshi/25m",
      config: {
        layout: "month_view",
        useSlotsViewOnSmallScreen: true, // FIXED (boolean)
      },
      buttonText: "Book Call",
      buttonColor: "#003D82",
      buttonTextColor: "#ffffff",
    })

    // ✅ UI Config
    window.Cal.ns["25m"]("ui", {
      cssVarsPerTheme: {
        light: { "cal-brand": "#003D82" },
        dark: { "cal-brand": "#fafafa" },
      },
      hideEventTypeDetails: false,
      layout: "month_view",
    })
  }, [])

  return (
    <section id="how-it-works" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <p className="text-primary text-sm uppercase tracking-widest mb-4">
            Our Process
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* LEFT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              How We Work
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              We keep things simple and transparent. You will always know where your project stands.
            </p>

            <ul className="space-y-4 mb-8">
              {journeySteps.map((step, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{step}</span>
                </li>
              ))}
            </ul>

            {/* Button (uses floating widget) */}
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
              onClick={() => {
                window.Cal.ns["25m"]("open") // ✅ opens popup manually
              }}
            >
              Book Call
            </Button>
          </div>

          {/* RIGHT */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-8">
              Your Project Journey
            </h3>

            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary-foreground">
                      {step.number}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground">
                      {step.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
