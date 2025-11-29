import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="min-h-dvh bg-gradient-to-b from-emerald-50 to-white dark:from-slate-900 dark:to-slate-950">
      {/* HERO */}
      <section className="mx-auto max-w-5xl px-4 pt-12 pb-8 sm:pt-16">
        <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 sm:p-10">
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Acerca de Fauna Trivia
          </h1>
          <p className="mt-3 text-lg text-slate-700 dark:text-slate-300">
            Fauna Trivia es una experiencia educativa sobre animales en peligro de
            extinción de La Paz, Bolivia. Aprende con microlecciones, pon a prueba tu
            conocimiento con quizzes y desbloquea firmas especiales para verlas en
            <span className="font-semibold"> Realidad Aumentada</span> con nuestra app.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/quiz"
              className="inline-flex items-center rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:scale-[1.02] hover:bg-emerald-700 active:scale-100"
            >
              Empezar lecciones y quizzes
            </Link>
            <Link
              to="/"
              className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Ir al inicio
            </Link>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="mx-auto max-w-5xl px-4 py-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          ¿Cómo funciona?
        </h2>

        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "1",
              title: "Aprende",
              desc: "Lee una microlección con datos clave de conservación y hábitat.",
            },
            {
              step: "2",
              title: "Responde",
              desc: "Completa un quiz breve (70% de aciertos para aprobar).",
            },
            {
              step: "3",
              title: "Descarga firma",
              desc: "Al aprobar, descarga una firma única reconocible por la app AR.",
            },
            {
              step: "4",
              title: "Explora en AR",
              desc: "Escanéala con la app para ver contenido 3D y material adicional.",
            },
          ].map((item) => (
            <li
              key={item.step}
              className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-100 text-lg font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                  {item.step}
                </span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
              </div>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{item.desc}</p>
            </li>
          ))}
        </ol>

        {/* Animales incluidos */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white/70 p-5 dark:border-slate-800 dark:bg-slate-900/60">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Módulos actuales
          </h3>
          <p className="mt-2 text-slate-700 dark:text-slate-300">
            Incluimos una lección introductoria y 12 especies de Bolivia:{" "}
            <span className="font-medium">alpaca</span>,{" "}
            <span className="font-medium">armadillo</span>,{" "}
            <span className="font-medium">caiman</span>,{" "}
            <span className="font-medium">delfin rosado</span>,{" "}
            <span className="font-medium">gato andino</span>,{" "}
            <span className="font-medium">oso jucumari</span>,{" "}
            <span className="font-medium">oveja</span>,{" "}
            <span className="font-medium">perezoso</span>,{" "}
            <span className="font-medium">serpiente</span>,{" "}
            <span className="font-medium">tortuga</span>,{" "}
            <span className="font-medium">tucán</span> y{" "}
            <span className="font-medium">vizcacha</span>. Cada una tiene su quiz y su firma.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            {["Introducción", "Alpaca", "Armadillo", "Caiman", "Delfín rosado", "Gato andino", "Oso jucumari", "Oveja", "Perezoso", "Serpiente", "Tortuga", "Tucán", "Vizcacha"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-emerald-300/60 bg-emerald-50 px-3 py-1 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* OBJETIVOS EDUCATIVOS */}
      <section className="mx-auto max-w-5xl px-4 py-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Objetivos educativos
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Conciencia y conservación",
              desc: "Promover el conocimiento sobre especies amenazadas y su rol en el ecosistema.",
            },
            {
              title: "Aprendizaje activo",
              desc: "Usar evaluación formativa (quizzes) con retroalimentación inmediata.",
            },
            {
              title: "Motivación con AR",
              desc: "Conectar el aprendizaje con experiencias inmersivas en Realidad Aumentada.",
            },
            {
              title: "Cultura y territorio",
              desc: "Resaltar especies emblemáticas de Bolivia para fortalecer identidad y cuidado ambiental.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-200 bg-white/70 p-5 dark:border-slate-800 dark:bg-slate-900/60"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-4 py-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Preguntas frecuentes</h2>
        <div className="mt-6 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white/70 dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900/60">
          {[
            {
              q: "¿Necesito internet para usar la app de AR?",
              a: "La descarga de firmas requiere internet. La visualización AR puede funcionar offline si la app ya tiene los modelos cargados.",
            },
            {
              q: "¿Puedo repetir un quiz?",
              a: "Sí. Puedes repetirlo para mejorar tu puntaje. La firma se habilita al alcanzar al menos el 70% de aciertos.",
            },
            {
              q: "¿Dónde se guardan mis avances?",
              a: "En esta versión web, de forma local en tu navegador (localStorage). No requiere registro.",
            },
            {
              q: "¿Las firmas vencen?",
              a: "No. Sin embargo, la app AR podría actualizar su catálogo; te avisaremos si hay cambios.",
            },
          ].map((item, i) => (
            <details key={i} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-slate-900 transition hover:opacity-90 dark:text-white">
                <span className="text-base font-semibold">{item.q}</span>
                <span className="ml-3 rounded-full border border-slate-300 px-2 text-sm text-slate-500 group-open:rotate-90 dark:border-slate-700 dark:text-slate-400">
                  ▶
                </span>
              </summary>
              <p className="mt-3 text-slate-700 dark:text-slate-300">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* PRIVACIDAD Y ACCESIBILIDAD */}
      <section className="mx-auto max-w-5xl px-4 py-8">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 dark:border-slate-800 dark:bg-slate-900/60">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Privacidad</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              No recolectamos datos personales en la versión web. Los avances de quizzes se
              guardan localmente. Para la app AR, revisa su política específica.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 dark:border-slate-800 dark:bg-slate-900/60">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Accesibilidad</h3>
            <ul className="mt-2 list-disc pl-5 text-slate-600 dark:text-slate-300">
              <li>Contrastes adecuados en modo oscuro y claro.</li>
              <li>Controles grandes y navegación por teclado.</li>
              <li>Texto alternativo en imágenes educativas.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Roadmap</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "Corto plazo",
              items: ["Timer por pregunta", "Medallas por puntaje", "Historial local de firmas"],
            },
            {
              title: "Mediano plazo",
              items: ["Ranking global (opt-in)", "Más especies de Bolivia", "Múltiples modos de juego"],
            },
            {
              title: "Largo plazo",
              items: ["Lecciones narradas", "Gamificación avanzada", "Integración con aulas virtuales"],
            },
          ].map((col) => (
            <div
              key={col.title}
              className="rounded-2xl border border-slate-200 bg-white/70 p-5 dark:border-slate-800 dark:bg-slate-900/60"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{col.title}</h3>
              <ul className="mt-2 list-disc pl-5 text-slate-600 dark:text-slate-300">
                {col.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/quiz"
            className="inline-flex items-center rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-emerald-700"
          >
            Ver lecciones
          </Link>
          <Link
            to="/"
            className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Volver al inicio
          </Link>
        </div>
      </section>

      {/* FOOTER MINI */}
      <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">

      </footer>
    </main>
  );
}
