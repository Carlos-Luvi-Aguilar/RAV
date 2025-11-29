import { Link } from "react-router-dom";
import React from "react";

export default function Home() {
  // ---------------------- CARRUSEL ----------------------
  const images = [
    "/img/g1.jpeg",
    "/img/g2.jpeg",
    "/img/g3.jpeg",
    "/img/g4.jpeg",
  ];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // ---------------------- RENDER ----------------------
  return (
      <main className="min-h-dvh bg-gradient-to-b from-emerald-50 to-white dark:from-slate-900 dark:to-slate-950">

        {/* HERO */}
        <section className="mx-auto max-w-6xl px-4 pt-14 pb-10 sm:pt-20 sm:pb-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">

            {/* Texto principal */}
            <div>
            <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200">
              Nueva • Trivia educativa
            </span>

              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Animales en peligro de extinción
              </h1>

              <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
                Pon a prueba tu conocimiento sobre especies amenazadas, sus hábitats y
                estados de conservación. Aprende jugando y comparte tu puntaje con tus amigos.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                    to="/quiz"
                    className="inline-flex items-center rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:scale-[1.02] hover:bg-emerald-700 active:scale-100"
                >
                  Comenzar Quiz
                  <svg
                      className="ml-2 h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                  >
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>


                <Link
                    to="/acerca"
                    className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  ¿Cómo funciona?
                </Link>

                <a
                    href="/img/animals1.apk"
                    className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  <svg
                      className="mr-2 h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Descargar APK
                </a>


              </div>

              {/* Mini KPIs */}
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600 dark:text-slate-300">
                <div>
                <span className="block text-2xl font-bold text-slate-900 dark:text-white">
                  18
                </span>
                  Preguntas iniciales
                </div>
              </div>
            </div>

            {/* ---------------------- CARRUSEL DE IMÁGENES ---------------------- */}
            <div className="relative">
              <div
                  className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 shadow-xl dark:border-slate-800">

                {/* Imagen principal */}
                <img
                    src={images[index]}
                    alt="fauna"
                    className="w-full h-full object-cover transition-opacity duration-700"
                />

                {/* Botón PREV */}
                <button
                    onClick={() =>
                        setIndex((i) => (i - 1 + images.length) % images.length)
                    }
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
                >
                  ‹
                </button>

                {/* Botón NEXT */}
                <button
                    onClick={() => setIndex((i) => (i + 1) % images.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
                >
                  ›
                </button>

                {/* Indicadores */}
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                  {images.map((_, i) => (
                      <div
                          key={i}
                          className={`h-3 w-3 rounded-full transition-all ${
                              i === index ? "bg-white w-6" : "bg-white/40"
                          }`}
                      ></div>
                  ))}
                </div>



              </div>

              {/* Glow */}
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-emerald-500/10 blur-3xl" />
            </div>
          </div>
        </section>

        {/* ---------------------- CARDS ---------------------- */}
        <section className="mx-auto mb-10 max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">¿Qué encontrarás?</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
                title="Preguntas dinámicas"
                desc="Opciones múltiples, pistas y feedback inmediato tras responder."
                emoji="🧩"
            />
            <FeatureCard
                title="Dificultad progresiva"
                desc="Empieza fácil y desbloquea niveles medio y difícil al subir de puntaje."
                emoji="🏆"
            />
            <FeatureCard
                title="Aprendizaje"
                desc="Cada respuesta explica el estado de conservación y el hábitat."
                emoji="📚"
            />
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="mx-auto max-w-6xl px-4 pb-16">
          <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 sm:p-8">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  ¿Listo para poner a prueba tu conocimiento?
                </h3>
                <p className="mt-1 text-slate-600 dark:text-slate-300">
                  Inicia el quiz y compite por el mejor puntaje.
                </p>
              </div>

              <Link
                  to="/quiz"
                  className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-slate-800 active:scale-100 dark:bg-emerald-600 dark:hover:bg-emerald-500"
              >
                Empezar ahora
              </Link>
            </div>
          </div>
        </section>
      </main>
  );
}

/* ---------------------- CARD COMPONENT ---------------------- */
type FeatureCardProps = {
  title: string;
  desc: string;
  emoji: string;
};
function FeatureCard({ title, desc, emoji }:FeatureCardProps) {
  return (
      <article className="group rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-100 text-2xl dark:bg-emerald-900/40">
            {emoji}
          </div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
        </div>

        <p className="mt-2 text-slate-600 dark:text-slate-300">{desc}</p>

        <Link
            to="/quiz"
            className="mt-3 inline-flex items-center text-emerald-700 underline decoration-emerald-400 underline-offset-4 transition hover:opacity-80 dark:text-emerald-300"
        >
          Probar
          <svg
              className="ml-1 h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </article>
  );
}
