export default function IntroSection() {
  return (
    <section
      id="intro"
      data-section
      className="relative flex h-dvh w-screen snap-start flex-col items-center justify-center bg-background px-6 text-center text-foreground"
    >
      <h1 className="text-4xl font-medium tracking-tight sm:text-6xl">
        Thomas Roy
      </h1>
      <p className="mt-4 max-w-md text-foreground/70">
        Photographe documentaire et artistique. Reportages, architecture
        urbaine et paysages.
      </p>
      <div className="absolute bottom-10 animate-bounce text-xs tracking-widest text-foreground/40 uppercase">
        Scroll
      </div>
    </section>
  );
}
