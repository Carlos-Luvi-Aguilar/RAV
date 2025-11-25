import { Link } from "react-router-dom";
import type { Lesson } from "../../data/quizzes";

export default function LessonCard({ lesson }: { lesson: Lesson }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60">
      <img src={lesson.image} alt={lesson.title} className="w-full rounded-xl mb-4" />
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{lesson.title}</h3>
      <p className="mt-2 text-slate-600 dark:text-slate-300">{lesson.description}</p>
      <Link
        to={`/quiz/${lesson.id}`}
        className="mt-3 inline-block rounded-xl bg-emerald-600 px-4 py-2 font-semibold text-white hover:bg-emerald-700"
      >
        Comenzar
      </Link>
    </article>
  );
}
