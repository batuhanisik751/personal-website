import Image from "next/image";
import { profile } from "@/lib/data";

// Renders the photo when `profile.photo` is set, otherwise a styled
// initials placeholder. Swap by setting `photo` in lib/data.ts.
export function ProfileAvatar() {
  const initials = `${profile.firstName[0]}${profile.lastName[0]}`;

  return (
    <div className="relative mx-auto aspect-square w-64 sm:w-72 lg:w-80">
      {/* Glow ring */}
      <div className="animate-pulse-ring absolute -inset-3 rounded-full bg-gradient-to-tr from-accent-deep via-accent to-accent-soft opacity-60 blur-xl" />

      {/* Gradient frame */}
      <div className="relative h-full w-full rounded-full bg-gradient-to-tr from-accent-deep via-accent to-accent-soft p-[3px]">
        <div className="relative h-full w-full overflow-hidden rounded-full bg-surface">
          {profile.photo ? (
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              priority
              sizes="(max-width: 1024px) 18rem, 20rem"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-surface to-bg-soft">
              <span className="font-mono text-6xl font-bold text-gradient">{initials}</span>
              <span className="mt-2 font-mono text-[0.65rem] uppercase tracking-widest text-faint">
                photo placeholder
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
