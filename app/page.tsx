import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { profile, stats, automation, aiEngineering, quickServices, projects, skills } from "./content";

export default function Home() {
  return (
    <main id="top" className="min-h-screen">
      <Nav />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="grid-backdrop relative overflow-hidden border-b border-line">
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-36 md:pt-44">
          <p className="eyebrow mb-6">
            Software Engineer · Istanbul <span className="text-signal">◆</span> Banking &amp; Aviation
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-500 leading-[1.05] tracking-tight text-ink md:text-6xl">
            {profile.tagline}
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-slate md:text-lg">
            {profile.intro}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded-full bg-ink px-6 py-3 font-mono text-xs uppercase tracking-label text-paper transition-transform hover:-translate-y-0.5"
            >
              View work
            </a>
            <a
              href="#contact"
              className="link-underline font-mono text-xs uppercase tracking-label text-ink"
            >
              Get in touch
            </a>
          </div>

          {/* signature: a flight-strip style data line */}
          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-6 font-mono text-xs text-slate">
            <span className="text-signal">— specialties</span>
            <span>Full-stack · Java / .NET / React</span>
            <span>Regulated systems</span>
            <span>n8n automation</span>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────── */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-5xl grid-cols-3 divide-x divide-line px-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="px-2 py-10 text-center md:py-14">
              <div className="font-display text-4xl text-ink md:text-5xl">{s.value}</div>
              <div className="eyebrow mt-2">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── SERVICES / AUTOMATION ────────────────────────────── */}
      <section id="services" className="border-b border-line bg-ink text-paper">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <Reveal>
            <p className="eyebrow mb-4 text-signalsoft">Automation</p>
            <h2 className="max-w-2xl font-display text-3xl leading-tight md:text-4xl">
              {automation.headline}
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-mist">{automation.blurb}</p>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-lg bg-white/10 sm:grid-cols-2">
            {automation.services.map((s, i) => (
              <Reveal key={s.title} delay={i * 70} className="bg-ink p-7">
                <div className="mb-3 font-mono text-xs text-signal">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI-AUGMENTED ENGINEERING ─────────────────────────── */}
      <section id="ai-engineering" className="border-b border-line bg-paper">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <Reveal>
            <p className="eyebrow mb-4">AI-augmented engineering</p>
            <h2 className="max-w-2xl font-display text-3xl leading-tight text-ink md:text-4xl">
              {aiEngineering.headline}
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-slate">{aiEngineering.blurb}</p>
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {aiEngineering.services.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <div className="hairline mb-4" />
                <div className="mb-3 font-mono text-xs text-signal">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-xl text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FREELANCE / QUICK SERVICES ────────────────────────── */}
      <section id="freelance" className="border-b border-line bg-ink text-paper">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <Reveal>
            <p className="eyebrow mb-4 text-signalsoft">Freelance</p>
            <h2 className="max-w-2xl font-display text-3xl leading-tight md:text-4xl">
              {quickServices.headline}
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-mist">{quickServices.blurb}</p>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-lg bg-white/10 sm:grid-cols-2">
            {quickServices.services.map((s, i) => (
              <Reveal key={s.title} delay={i * 70} className="bg-ink p-7">
                <div className="mb-3 font-mono text-xs text-signal">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{s.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={280}>
            <a
              href="#contact"
              className="mt-12 inline-block rounded-full bg-paper px-6 py-3 font-mono text-xs uppercase tracking-label text-ink transition-transform hover:-translate-y-0.5"
            >
              Get a quote →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── WORK ─────────────────────────────────────────────── */}
      <section id="work" className="border-b border-line bg-paper">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <Reveal>
            <p className="eyebrow mb-4">Selected work</p>
            <h2 className="font-display text-3xl text-ink md:text-4xl">
              Systems I&apos;ve designed and shipped
            </h2>
          </Reveal>

          <div className="mt-14 space-y-px">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 60}>
                <article className="group border-t border-line py-10 md:grid md:grid-cols-[1fr_1.6fr] md:gap-10">
                  <div className="mb-5 md:mb-0">
                    <p className="eyebrow">{p.kind}</p>
                    <h3 className="mt-2 font-display text-2xl text-ink">{p.name}</h3>
                    <p className="mt-2 font-mono text-xs text-slate">
                      {p.year} · {p.role}
                    </p>
                    {p.confidential && (
                      <p className="mt-3 inline-block rounded border border-line px-2 py-1 font-mono text-[0.65rem] uppercase tracking-label text-slate">
                        Client work — no internal details shown
                      </p>
                    )}
                    {p.link && (
                      <a
                        href={p.link.href}
                        target={p.link.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="link-underline mt-3 block font-mono text-xs text-ink"
                      >
                        {p.link.label} ↗
                      </a>
                    )}
                  </div>

                  <div>
                    <p className="leading-relaxed text-slate">{p.summary}</p>
                    <ul className="mt-4 space-y-2">
                      {p.details.map((d) => (
                        <li key={d} className="flex gap-3 text-sm leading-relaxed text-slate">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-line px-3 py-1 font-mono text-xs text-slate"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────── */}
      <section id="skills" className="border-b border-line bg-paper">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <Reveal>
            <p className="eyebrow mb-4">Toolkit</p>
            <h2 className="font-display text-3xl text-ink md:text-4xl">Skills &amp; stack</h2>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {skills.map((s, i) => (
              <Reveal key={s.group} delay={i * 60}>
                <div className="hairline mb-4" />
                <p className="eyebrow mb-3">{s.group}</p>
                <ul className="space-y-1.5">
                  {s.items.map((it) => (
                    <li key={it} className="font-mono text-sm text-ink">
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <section id="contact" className="bg-ink text-paper">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <Reveal>
            <p className="eyebrow mb-4 text-signalsoft">Contact</p>
            <h2 className="max-w-2xl font-display text-4xl leading-tight md:text-5xl">
              Have a system to build or a workflow to automate?
            </h2>
            <a
              href={`mailto:${profile.email}`}
              className="link-underline mt-8 inline-block font-display text-2xl text-signalsoft md:text-3xl"
            >
              {profile.email}
            </a>
            {/* <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-label text-mist">
              <a className="hover:text-signal" href={profile.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a className="hover:text-signal" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a className="hover:text-signal" href={profile.website} target="_blank" rel="noreferrer">
                Website ↗
              </a>
              <a className="hover:text-signal" href={profile.cv}>
                Download CV ↗
              </a>
            </div> */}
          </Reveal>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 font-mono text-xs text-mist">
            <span>{profile.name}</span>
            <span>{profile.location}</span>
          </div>
        </div>
      </section>
    </main>
  );
}
