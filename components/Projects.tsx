"use client";

import { motion } from "framer-motion";
import { projects, type Project } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { StaggerGroup, revealItem } from "./Reveal";
import { ArrowUpRightIcon } from "./Icons";

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={revealItem}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-surface to-bg-soft p-6"
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -top-16 left-1/2 h-32 w-48 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="relative flex items-start justify-between gap-4">
        <h3 className="font-mono text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <span className="whitespace-nowrap font-mono text-xs text-faint">{project.date}</span>
      </div>

      <p className="relative mt-3 text-sm leading-relaxed text-muted">{project.blurb}</p>

      <ul className="relative mt-4 space-y-2">
        {project.highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted/90">
            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
            {h}
          </li>
        ))}
      </ul>

      <div className="relative mt-auto pt-5">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-md bg-surface-2/70 px-2.5 py-1 font-mono text-xs text-accent-soft/90"
            >
              {s}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 font-mono text-sm text-accent transition-colors hover:text-accent-soft"
          >
            {project.link.label}
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24 md:py-32">
      <SectionHeading
        kicker="projects"
        title="Things I've built"
        description="A selection of projects across machine learning, mobile, and systems engineering."
      />

      <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </StaggerGroup>
    </section>
  );
}
