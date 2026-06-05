import { experience } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-y border-border bg-bg-soft/40 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          kicker="experience"
          title="Where I've worked"
          description="Roles spanning applied AI research, deep learning, and platform engineering."
        />

        {/* Timeline */}
        <div className="relative ml-2 border-l border-border pl-8 md:ml-3 md:pl-10">
          {experience.map((job, i) => (
            <Reveal key={job.company + job.period} delay={i * 0.05}>
              <article className="relative pb-12 last:pb-0">
                {/* Timeline node */}
                <span
                  className={`absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full md:-left-[49px] ${
                    job.current ? "bg-accent" : "bg-surface-2"
                  } ring-4 ring-bg`}
                >
                  {job.current && (
                    <span className="absolute h-4 w-4 animate-ping rounded-full bg-accent/60" />
                  )}
                </span>

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-mono text-lg font-semibold text-foreground md:text-xl">
                    {job.role}
                  </h3>
                  <span className="font-mono text-sm text-accent">{job.period}</span>
                </div>

                <p className="mt-1 text-sm text-muted">
                  <span className="font-medium text-foreground">{job.company}</span>
                  <span className="text-faint"> · {job.location}</span>
                </p>

                <ul className="mt-4 space-y-2.5">
                  {job.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/70" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
