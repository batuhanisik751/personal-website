import { profile, navLinks } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

const socials = [
  { href: profile.github, label: "GitHub", Icon: GitHubIcon },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-soft/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent font-mono text-xs font-bold text-bg">
            B
          </span>
          <span className="font-mono text-sm text-muted">
            © {new Date().getFullYear()} {profile.name}
          </span>
        </div>

        <nav className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="font-mono text-xs text-faint transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="text-faint transition-colors hover:text-accent"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
