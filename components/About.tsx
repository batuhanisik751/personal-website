import { about } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24 md:py-32">
      <SectionHeading kicker="about" title="A bit about me" />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
        {/* Bio */}
        <Reveal>
          <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
            {about.blurb.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8">
            <p className="kicker mb-3">{`// leadership`}</p>
            <ul className="space-y-2">
              {about.leadership.map((l) => (
                <li key={l} className="flex items-start gap-3 text-sm text-muted">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Quick facts */}
        <Reveal delay={0.15}>
          <dl className="grid grid-cols-2 gap-4">
            {about.facts.map((fact) => (
              <div key={fact.label} className="card p-5">
                <dt className="font-mono text-xs uppercase tracking-wider text-faint">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 font-medium text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
