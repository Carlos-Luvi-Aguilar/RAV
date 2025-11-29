import { useMemo, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { lessons } from "../data/quizzes";

type Result = "idle" | "correct" | "wrong" | "finished";

const PASS_THRESHOLD = 0.7; // 70% para aprobar y habilitar descarga

export default function QuizPlay() {
  const { id } = useParams();
  const navigate = useNavigate();

  const lesson = useMemo(() => lessons.find(l => l.id === id), [id]);

  const [qIndex, setQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [state, setState] = useState<Result>("idle");
  const [selected, setSelected] = useState<number | null>(null);

  if (!lesson) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Quiz no encontrado</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          La lección solicitada no existe.
        </p>
        <Link to="/quiz" className="mt-4 inline-block underline">Volver</Link>
      </main>
    );
  }

  const total = lesson.questions.length;
  const question = lesson.questions[qIndex];

  const progress = Math.round(((qIndex) / total) * 100);
  const passed = score / total >= PASS_THRESHOLD;

  function selectOption(idx: number) {
    if (state === "finished") return;
    setSelected(idx);
  }

  function submit() {
    if (selected === null) return;

    const isCorrect = question.options[selected].correct;
    if (isCorrect) setScore((s) => s + 1);

    // feedback breve y luego pasar a la siguiente
    setState(isCorrect ? "correct" : "wrong");

    setTimeout(() => {
      const next = qIndex + 1;
      if (next < total) {
        setQIndex(next);
        setSelected(null);
        setState("idle");
      } else {
        setState("finished");
      }
    }, 700);
  }

  function retry() {
    setQIndex(0);
    setScore(0);
    setSelected(null);
    setState("idle");
  }

  function downloadFirma() {
    if (!lesson || !lesson.firma) return;
    const a = document.createElement("a");
    a.href = lesson.firma;
    a.download = `${lesson.id}-firma.jpg`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  return (
    <main className="min-h-dvh bg-gradient-to-b from-emerald-50 to-white px-4 py-10 dark:from-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-3xl">
        {/* Encabezado */}
        <div className="mb-6 flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="rounded-xl border border-slate-300 px-3 py-2 text-sm hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            ← Volver
          </button>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{lesson.title}</h1>
        </div>

        {/* Tarjeta descriptiva */}
        <div className="mb-6 overflow-hidden rounded-2xl border border-slate-200 bg-white/70 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
          <img src={lesson.image} alt={lesson.title} className="h-48 w-full object-cover" />
          <div className="p-5">
            <p className="text-slate-700 dark:text-slate-300">{lesson.description}</p>
          </div>
        </div>

        {/* Barra de progreso */}
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm text-slate-600 dark:text-slate-300">
            Pregunta {Math.min(qIndex + 1, total)} de {total}
          </span>
          <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
            Puntaje: {score}/{total}
          </span>
        </div>
        <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div
            className="h-full rounded-full bg-emerald-500 transition-all"
            style={{ width: `${state === "finished" ? 100 : progress}%` }}
          />
        </div>

        {/* Contenido del quiz */}
        {state !== "finished" ? (
          <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
            <h2 className="text-lg font-semibold text-white dark:text-white">{question.text}</h2>

            <div className="mt-4 grid gap-3">
              {question.options.map((op, idx) => {
                const isSelected = selected === idx;
                const base =
                  "w-full text-left rounded-xl border px-4 py-3 transition outline-none text-white";
                const idle =
                  "border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800";
                const active =
                  "border-emerald-500 bg-emerald-50 ring-2 ring-emerald-400/40 dark:bg-emerald-900/30";

                // feedback flash
                const flashCorrect = state === "correct" && isSelected;
                const flashWrong = state === "wrong" && isSelected;

                return (
                  <button
                    key={idx}
                    className={`${base} ${isSelected ? active : idle} ${
                      flashCorrect ? "bg-emerald-100 dark:bg-emerald-900/50" : ""
                    } ${flashWrong ? "bg-red-300 dark:bg-red-900/40" : ""}`}
                    onClick={() => selectOption(idx)}
                  >
                    {op.text}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 flex justify-end gap-3">
              <button
                disabled={selected === null}
                onClick={submit}
                className="rounded-xl bg-emerald-600 px-4 py-2 font-semibold text-white shadow hover:bg-emerald-700 disabled:opacity-50"
              >
                Confirmar
              </button>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">¡Resultado!</h2>
            <p className="mt-2 text-slate-700 dark:text-slate-300">
              Obtuviste <strong>{score}</strong> de <strong>{total}</strong> (
              {Math.round((score / total) * 100)}%).
            </p>

            {lesson.firma ? (
              passed ? (
                <div className="mt-5 space-y-3">
                  <p className="text-emerald-700 dark:text-emerald-300">
                    ¡Aprobaste! Puedes descargar tu firma para usarla en la app de AR.
                  </p>
                  <button
                    onClick={downloadFirma}
                    className="rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white shadow hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-500"
                  >
                    Descargar firma
                  </button>
                </div>
              ) : (
                <p className="mt-4 text-red-600 dark:text-red-400">
                  No alcanzaste el mínimo del {Math.round(PASS_THRESHOLD * 100)}%. ¡Inténtalo de nuevo!
                </p>
              )
            ) : (
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                Esta es una lección introductoria sin firma descargable.
              </p>
            )}

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                onClick={retry}
                className="rounded-xl border border-slate-300 px-4 py-2 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Reintentar
              </button>
              <Link
                to="/quiz"
                className="rounded-xl bg-emerald-600 px-4 py-2 font-semibold text-white hover:bg-emerald-700"
              >
                Ver más lecciones
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
