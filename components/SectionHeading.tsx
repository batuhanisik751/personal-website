import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
};

export function SectionHeading({ kicker, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="kicker mb-3">{`// ${kicker}`}</p>
      <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
