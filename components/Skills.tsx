"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { StaggerGroup, revealItem } from "./Reveal";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-border bg-bg-soft/40 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          kicker="skills"
          title="Tools & technologies"
          description="The languages, frameworks, and platforms I work with most."
        />

        <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skills.map((group) => (
            <motion.div key={group.label} variants={revealItem} className="card p-6">
              <h3 className="kicker mb-4">{group.label}</h3>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent/50 hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
