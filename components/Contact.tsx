"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

// Set NEXT_PUBLIC_FORMSPREE_ID in .env.local (the part after /f/ in your
// Formspree endpoint). Without it, the form falls back to a mailto: link.
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;
const ENDPOINT = FORMSPREE_ID ? `https://formspree.io/f/${FORMSPREE_ID}` : null;

type Status = "idle" | "submitting" | "success" | "error";

const socials = [
  { href: profile.github, label: "GitHub", Icon: GitHubIcon },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon },
];

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // No Formspree configured yet → open the visitor's mail client.
    if (!ENDPOINT) {
      const name = String(data.get("name") ?? "");
      const email = String(data.get("email") ?? "");
      const message = String(data.get("message") ?? "");
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        `Portfolio inquiry from ${name}`
      )}&body=${body}`;
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24 md:py-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* Left: invitation */}
        <Reveal>
          <p className="kicker mb-3">{`// contact`}</p>
          <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Let&apos;s build <span className="text-gradient">something</span>.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg">
            I&apos;m open to internships, new-grad roles, and interesting collaborations.
            Drop a message and I&apos;ll get back to you.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-flex items-center gap-2.5 font-mono text-sm text-accent transition-colors hover:text-accent-soft"
          >
            <MailIcon className="h-5 w-5" />
            {profile.email}
          </a>

          <div className="mt-8 flex items-center gap-3">
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
          </div>
        </Reveal>

        {/* Right: form */}
        <Reveal delay={0.12}>
          <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[18rem] flex-col items-center justify-center text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-2xl">
                  ✓
                </div>
                <h3 className="mt-4 font-mono text-lg font-semibold text-foreground">
                  Message sent!
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Thanks for reaching out — I&apos;ll reply soon.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-5 font-mono text-sm text-accent hover:text-accent-soft"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <div className="space-y-5">
                <Field label="Name" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="field"
                  />
                </Field>

                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    className="field"
                  />
                </Field>

                <Field label="Message" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about the opportunity…"
                    className="field resize-none"
                  />
                </Field>

                {status === "error" && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Please email me directly at {profile.email}.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-mono text-sm font-semibold text-bg shadow-[0_8px_30px_-8px] shadow-accent/50 transition-all duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending…" : "Send message"}
                </button>
              </div>
            )}
          </form>
        </Reveal>
      </div>

      <style>{`
        .field {
          width: 100%;
          border-radius: 0.625rem;
          border: 1px solid var(--border);
          background: var(--bg-soft);
          padding: 0.7rem 0.9rem;
          font-size: 0.9rem;
          color: var(--foreground);
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .field::placeholder { color: var(--faint); }
        .field:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 18%, transparent);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block font-mono text-xs uppercase tracking-wider text-faint"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
