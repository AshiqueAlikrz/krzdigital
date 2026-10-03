import Glitter from "./Glitter.tsx";

const App = () => (
  <main className="relative flex min-h-full items-center justify-center overflow-hidden px-6 py-16">
    <Glitter />

    <section className="relative flex max-w-2xl flex-col items-center text-center">
      <div>
        <div className="rise flex items-center gap-4 sm:gap-5">
          <img
            src="/krz-logo.png"
            alt="KRZ"
            width={96}
            height={96}
            className="h-20 w-20 rounded-3xl shadow-[0_16px_60px_-16px_rgba(6,214,160,0.55)] sm:h-24 sm:w-24"
          />
          <span className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Digital</span>
        </div>
      </div>

      <h1
        className="rise mt-10 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl"
        style={{ animationDelay: "0.15s" }}
      >
        Bold ideas,
        <br />
        <span className="text-mint">beautifully built.</span>
      </h1>

      <p
        className="rise mt-6 whitespace-nowrap text-[2.9vw] leading-relaxed text-white/55 sm:text-lg"
        style={{ animationDelay: "0.3s" }}
      >
        The future starts as an idea. We turn yours into reality.
      </p>
    </section>
  </main>
);

export default App;
