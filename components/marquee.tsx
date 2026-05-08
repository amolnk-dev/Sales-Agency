"use client"

const skillsRow1 = [
  "JavaScript",
  "React",
  "Next.js",
  "Swift",
  "Kotlin",
  "TypeScript",
  "Python",
  "C#",
  ".NET",
  "Java",
  "Go",
  "PHP",
  "Rust",
  "SQL",
  "HTML",
  "CSS",
  "Node.js",
  "LangChain",
  "Microsoft AutoGen",
  "CrewAI",
  "Semantic Kernel",
  "n8n",
  "Make",
  "Zapier"
]

const skillsRow2 = [
  "Microsoft Power Automate",
  "Adalo",
  "Bubble",
  "Glide",
  "AWS Lambda",
  "Google Cloud Run",
  "Vercel",
  "Django",
  "Spring Boot",
  "Laravel",
  "ASP.NET Core",
  "React",
  "Vue.js",
  "Angular",
  "PostgreSQL",
  "Redis",
  "RabbitMQ",
  "Scaloom",
  "Reddit Pro",
  "Sprout Social",
  "Adobe Firefly",
  "AI Assistant",
  "Adobe Creativity"
]

export function Marquee() {
  return (
    <section className="py-8 overflow-hidden border-y border-border bg-secondary/50">
      <div className="relative">
        {/* First row - left to right */}
        <div className="flex animate-marquee whitespace-nowrap mb-4">
          {[...skillsRow1, ...skillsRow1, ...skillsRow1, ...skillsRow1].map((skill, index) => (
            <span
              key={index}
              className="mx-6 px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Second row - right to left */}
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {[...skillsRow2, ...skillsRow2, ...skillsRow2, ...skillsRow2].map((skill, index) => (
            <span
              key={index}
              className="mx-6 px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
