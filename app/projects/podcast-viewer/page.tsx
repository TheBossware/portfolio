import { episodes } from "./static/mock";
import { Play, Info } from "lucide-react";

export default function TheirSide() {
    return (
        <main className="mx-auto flex min-h-screen max-w-5xl flex-col ">
            <div className="mt-6 font-bold text-2xl/7  text-slate-900 py-16">
                <h6>Episodes</h6>
            </div>
            <div className="divide-y divide-slate-100 border-t-2 border-slate">
                {episodes.map((episode) => (
                    <article key={episode.id}>
                        <div className="mx-auto px-10 py-10 flex flex-col gap-2">
                            <time className="text-slate-500">{episode.date}</time>
                            <h2 className="text-slate-900 font-bold">{episode.id} : {episode.title}</h2>
                            <p className="text-slate-700">{episode.description}</p>
                            <div className="flex gap-4 mt-4">
                                <button className="flex gap-2 text-pink-500 font-bold hover:text-pink-700 active:text-pink-900 text-xs">
                                    <Play size={16} /> Listen Now
                                </button>
                                <button className="flex gap-2 text-pink-500 font-bold hover:text-pink-700 active:text-pink-900 text-xs">
                                    <Info size={16} /> Show Notes
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

        </main>
    )
}