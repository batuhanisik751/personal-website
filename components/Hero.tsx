"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { BackgroundGlow } from "./BackgroundGlow";
import { ProfileAvatar } from "./ProfileAvatar";
import {
  ArrowDownIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
} from "./Icons";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const socials = [
  { href: profile.github, label: "GitHub", Icon: GitHubIcon },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-dvh items-center overflow-hidden pt-24 pb-16"
    >
      <BackgroundGlow />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        {/* Left: copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="kicker mb-4">
            {`// ${profile.role}`}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-mono text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {profile.firstName}{" "}
            <span className="text-gradient">{profile.lastName}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-faint"
          >
            <MapPinIcon className="h-4 w-4 text-accent" />
            {profile.location}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-mono text-sm font-semibold text-bg shadow-[0_8px_30px_-8px] shadow-accent/60 transition-transform duration-200 hover:-translate-y-0.5"
            >
              View my work
              <ArrowDownIcon className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-6 py-3 font-mono text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
            >
              <DownloadIcon className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div variants={item} className="mt-9 flex items-center gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface/60 text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
          className="order-first lg:order-last"
        >
          <ProfileAvatar />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        aria-label="Scroll to About"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-faint sm:flex"
      >
        <span className="font-mono text-[0.65rem] uppercase tracking-widest">Scroll</span>
        <ArrowDownIcon className="animate-bob h-4 w-4 text-accent" />
      </motion.a>
    </section>
  );
}
