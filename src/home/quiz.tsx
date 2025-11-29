import LessonCard from "../components/cards/lessonCard";
import { lessons } from "../data/quizzes";

export default function Quiz() {
  return (
    <main className="min-h-dvh bg-gradient-to-b from-emerald-50 to-white dark:from-slate-900 dark:to-slate-950">
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white text-center">
          Lecciones y Quizzes Educativos
        </h1>
        <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
          Aprende sobre la fauna boliviana en peligro y desbloquea firmas especiales.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </section>
    </main>
  );
}
