export default function IntroSection() {
  return (
    <section
      id="intro"
      data-section
      className="relative flex h-screen w-screen snap-start flex-col items-center justify-center bg-black px-6 text-center text-white"
    >
      <p className="text-xs tracking-[0.3em] text-white/50 uppercase">
        Portfolio
      </p>
      <h1 className="mt-4 text-4xl font-medium tracking-tight sm:text-6xl">
        Thomas Roy
      </h1>
      <p className="mt-4 max-w-md text-white/70">
        Photographe documentaire et artistique. Reportages, architecture
        urbaine et paysages.
      </p>
      <div className="absolute bottom-10 animate-bounce text-xs tracking-widest text-white/40 uppercase">
        Scroll
      </div>
    </section>
  );
}
