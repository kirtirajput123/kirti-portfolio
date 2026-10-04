 "use client";

import { useState } from "react";

const EMAIL = "kirti.0112cs221071@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/kirti-rajput-2b4196277/";

function EducationSlider() {
  const education = [
    {
      number: "01",
      type: "Graduation",
      year: "2026",
      title: "B.Tech in Computer Science & Engineering",
      institute: "Bansal Institute of Science and Technology",
      location: "Bhopal, Madhya Pradesh",
      result: "8.71",
      resultLabel: "CGPA",
      detail: "Computer Science & Engineering",
      short: "CSE",
    },
    {
      number: "02",
      type: "Higher Secondary",
      year: "2022",
      title: "Class XII — PCM",
      institute: "Imperial Public School",
      location: "Harda, Madhya Pradesh",
      result: "86.2",
      resultLabel: "%",
      detail: "Physics, Chemistry & Mathematics",
      short: "PCM",
    },
    {
      number: "03",
      type: "Secondary",
      year: "2020",
      title: "Class X",
      institute: "Imperial Public School",
      location: "Harda, Madhya Pradesh",
      result: "95.66",
      resultLabel: "%",
      detail: "Secondary School Education",
      short: "10th",
    },
  ];

  const [active, setActive] = useState(0);

  const current = education[active];

  const next = () => {
    setActive((prev) => (prev + 1) % education.length);
  };

  const previous = () => {
    setActive(
      (prev) => (prev - 1 + education.length) % education.length
    );
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[#e2e0db] bg-[#f8f7f4] p-7">

      {/* Decorative circle */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-[#ddd9ff] transition-transform duration-700 group-hover:scale-125" />

      <div className="relative">

        {/* Top */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">
            <span className="text-sm text-[#999]">
              {current.number}
            </span>

            <span className="h-px w-6 bg-[#d5d3ce]" />

            <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#999]">
              Education
            </span>
          </div>

          <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#666]">
            {current.year}
          </span>

        </div>


        {/* Content */}
        <div
          key={current.number}
          className="mt-12 animate-[educationSlide_0.4s_ease-out]"
        >

          <p className="text-sm font-medium text-[#4f46e5]">
            {current.type}
          </p>

          <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
            {current.title}
          </h3>

          <p className="mt-5 text-[#555]">
            {current.institute}
          </p>

          <p className="mt-1 text-sm text-[#999]">
            {current.location}
          </p>


          {/* Result */}
          <div className="mt-8 flex items-end justify-between border-t border-[#e2e0db] pt-6">

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#999]">
                Result
              </p>

              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">
                  {current.result}
                </span>

                <span className="text-sm text-[#999]">
                  {current.resultLabel}
                </span>
              </div>
            </div>


            {/* Rotating badge */}
            <div className="relative flex h-14 w-14 items-center justify-center">

              <div className="absolute inset-0 rounded-full border border-[#d8d4ff] transition-transform duration-700 group-hover:rotate-180" />

              <div className="absolute inset-2 rounded-full border border-dashed border-[#c8c3ff] transition-transform duration-700 group-hover:-rotate-180" />

              <span className="relative text-xs font-bold text-[#4f46e5]">
                {current.short}
              </span>

            </div>

          </div>


          {/* Detail */}
          <div className="mt-6 rounded-xl border border-[#e2e0db] bg-white/70 px-4 py-3">

            <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#999]">
              Focus
            </p>

            <p className="mt-1 text-sm font-medium text-[#555]">
              {current.detail}
            </p>

          </div>

        </div>


        {/* Controls */}
        <div className="mt-8 flex items-center justify-between border-t border-[#e2e0db] pt-5">

          {/* Dots */}
          <div className="flex items-center gap-2">
            {education.map((item, index) => (
              <button
                key={item.number}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show ${item.type}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  active === index
                    ? "w-9 bg-[#4f46e5]"
                    : "w-4 bg-[#d4d2cd] hover:bg-[#aaa]"
                }`}
              />
            ))}
          </div>


          {/* Arrows */}
          <div className="flex gap-2">

            <button
              type="button"
              onClick={previous}
              aria-label="Previous education"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dedbd5] bg-white text-[#555] transition-all duration-300 hover:-translate-x-1 hover:border-[#bcb7ff] hover:text-[#4f46e5]"
            >
              ←
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next education"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#18181b] text-white transition-all duration-300 hover:translate-x-1 hover:bg-[#4f46e5]"
            >
              →
            </button>

          </div>

        </div>

      </div>


      {/* Animation */}
      <style jsx>{`
        @keyframes educationSlide {
          from {
            opacity: 0;
            transform: translateX(12px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

    </div>
  );
}

function ProjectSlider() {
  const projects = [
     {
      title: "Digital Heroes",
      category: "Full Stack Web App",
      description:
        "A full-stack community platform combining charity discovery, subscriptions, golf score tracking and member activity in one interactive dashboard.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
      highlights: [
        "Charity directory with search and filters",
        "Charity contribution management",
        "Subscription plan experience",
        "Golf score tracking",
        "Draw results and winnings",
      ],
      github: "https://github.com/kirtirajput123/digital-heroes",
      live: "https://digital-heroes-sandy-chi.vercel.app/",
      number: "01",
      accent: "from-purple-500 via-violet-500 to-indigo-500",
    },
    {
      title: "AI Trading Research Assistant",
      category: "AI × Full Stack",
      description:
        "A research prototype that turns natural-language trading questions into structured experiments using mock historical data.",
      tech: ["React", "Vite", "Node.js", "Express", "OpenAI API"],
      highlights: [
        "Natural-language trading queries",
        "Experiment configuration flow",
        "Mock historical analysis",
        "Interactive result dashboard",
      ],
      github:
        "https://github.com/kirtirajput123/trade-research-assistant",
      live: "https://trade-research-assistant.vercel.app/",
      number: "02",
      accent: "from-violet-500 via-purple-500 to-blue-500",
    },
    {
      title: "Dr. Maya Reynolds Therapy",
      category: "Frontend × Next.js",
      description:
        "A modern therapy website focused on calm visual hierarchy, responsive layouts and a polished user experience.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      highlights: [
        "Responsive modern interface",
        "Accessible component structure",
        "Calm visual design system",
        "Mobile-first experience",
      ],
      github: "https://github.com/kirtirajput123/maya-therapy",
      live: "https://maya-therapy-phi.vercel.app/",
      number: "03",
      accent: "from-blue-500 via-cyan-400 to-indigo-500",
    },
    {
      title: "Skill-to-Project Generator",
      category: "Full Stack",
      description:
        "A platform that recommends projects based on a user's skills and experience, then generates a structured learning roadmap.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      highlights: [
        "Skill-based project recommendations",
        "Beginner to advanced paths",
        "Learning roadmap generation",
        "MongoDB-backed application",
      ],
      github: "",
      live: "",
      number: "04",
      accent: "from-emerald-400 via-teal-500 to-cyan-500",
    },
    {
      title: "Video Annotation Platform",
      category: "Frontend × Full Stack",
      description:
        "A video annotation platform designed for creating timestamp-based annotations while tracking progress through uploaded content.",
      tech: ["React", "JavaScript", "CSS", "MongoDB"],
      highlights: [
        "Timestamp-based annotations",
        "Progress tracking",
        "Admin upload workflow",
        "Responsive dashboard",
      ],
      github: "",
      live: "",
      number: "05",
      accent: "from-orange-400 via-pink-500 to-rose-500",
    },
  ];

  const [active, setActive] = useState(0);
  const project = projects[active];

  const nextProject = () => {
    setActive((current) => (current + 1) % projects.length);
  };

  const previousProject = () => {
    setActive(
      (current) => (current - 1 + projects.length) % projects.length
    );
  };

  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-white px-6 py-24 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-500">
              Featured Work
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-5xl">
              Projects I&apos;ve built.
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-zinc-600 dark:text-zinc-400">
              A few projects where I&apos;ve turned ideas into working
              interfaces, products and experiments.
            </p>
          </div>

          {/* Counter */}
          <div className="text-sm font-medium text-zinc-400">
            <span className="text-3xl font-bold text-zinc-900 dark:text-white">
              {String(active + 1).padStart(2, "0")}
            </span>
            {" / "}
            {String(projects.length).padStart(2, "0")}
          </div>

        </div>

        {/* ================= MAIN SHOWCASE ================= */}
        <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">

          <div className="grid min-h-[560px] lg:grid-cols-[1.05fr_0.95fr]">

            {/* ================================================= */}
            {/* LEFT — INTERACTIVE PROJECT VISUAL */}
            {/* ================================================= */}
            <div className="relative flex min-h-[400px] items-center justify-center overflow-hidden p-6 sm:p-10">

              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-[0.08] transition-all duration-700`}
              />

              {/* Decorative blobs */}
              <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl dark:bg-purple-500/10" />

              <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-500/10" />

              {/* ================================================= */}
              {/* PROJECT VISUAL */}
              {/* ================================================= */}
              <div
                key={project.number}
                className="relative z-10 w-full max-w-[560px] animate-[projectIn_.5s_ease-out]"
              >

                {/* Browser */}
                <div className="overflow-hidden rounded-[1.5rem] border border-white/80 bg-white shadow-2xl dark:border-zinc-700 dark:bg-zinc-950">

                  {/* Browser top */}
                  <div className="flex items-center gap-2 border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">

                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                    <div className="ml-4 h-6 flex-1 rounded-md bg-zinc-100 dark:bg-zinc-900" />

                  </div>


                  {active === 0 && (
                    <div className="bg-[#faf9ff] p-5 sm:p-7 dark:bg-zinc-950">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-medium text-zinc-400">Digital Heroes</p>
                          <h4 className="mt-1 text-lg font-bold text-zinc-900 dark:text-white">Community Dashboard</h4>
                        </div>
                        <div className="rounded-xl bg-purple-50 px-3 py-2 text-xs font-semibold text-purple-600 dark:bg-purple-500/10">LIVE</div>
                      </div>
                      <div className="mt-5 rounded-2xl border border-purple-100 bg-white p-4 shadow-sm dark:border-purple-500/10 dark:bg-zinc-900">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Charity Directory</p>
                            <p className="mt-1 text-sm font-semibold text-zinc-800 dark:text-zinc-200">Find a cause to support</p>
                          </div>
                          <span className="rounded-full bg-purple-50 px-2.5 py-1 text-[10px] font-medium text-purple-600 dark:bg-purple-500/10">Explore</span>
                        </div>
                        <div className="mt-4 flex gap-2">
                          <div className="h-9 flex-1 rounded-xl bg-zinc-100 dark:bg-zinc-800" />
                          <div className="h-9 w-20 rounded-xl bg-purple-500/15" />
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="rounded-2xl bg-zinc-100 p-4 dark:bg-zinc-900"><p className="text-[10px] text-zinc-400">Contributions</p><p className="mt-2 text-sm font-bold text-purple-600">Charity</p></div>
                        <div className="rounded-2xl bg-zinc-100 p-4 dark:bg-zinc-900"><p className="text-[10px] text-zinc-400">Activity</p><p className="mt-2 text-sm font-bold text-indigo-500">Golf Scores</p></div>
                      </div>
                      <div className="mt-4 rounded-2xl border border-zinc-100 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
                        <div className="flex items-center justify-between"><p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Member Activity</p><span className="text-[10px] font-medium text-emerald-500">Active</span></div>
                        <div className="mt-4 flex h-20 items-end gap-2">{[35,52,45,68,58,82,72,92].map((height,index)=><div key={index} className="flex-1 rounded-t-md bg-gradient-to-t from-purple-500 to-indigo-400 opacity-80" style={{height:`${height}%`}} />)}</div>
                      </div>
                    </div>
                  )}


                  {/* ================================================= */}
                  {/* 01 — AI TRADING */}
                  {/* ================================================= */}
                  {active === 1 && (
                    <div className="relative bg-[#fafaff] p-5 sm:p-7 dark:bg-zinc-950">

                      <div className="mb-6 flex items-center justify-between">

                        <div>
                          <p className="text-xs font-medium text-zinc-400">
                            Research Assistant
                          </p>

                          <h4 className="mt-1 text-lg font-bold text-zinc-900 dark:text-white">
                            NIFTY Experiment
                          </h4>
                        </div>

                        <div className="rounded-xl bg-purple-50 px-3 py-2 text-xs font-semibold text-purple-600 dark:bg-purple-500/10">
                          AI
                        </div>

                      </div>

                      {/* Query */}
                      <div className="rounded-2xl border border-purple-100 bg-white p-4 shadow-sm dark:border-purple-500/10 dark:bg-zinc-900">

                        <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                          Research question
                        </p>

                        <p className="mt-2 text-sm font-medium leading-5 text-zinc-700 dark:text-zinc-300">
                          What happens when NIFTY falls by 2% during high volatility?
                        </p>

                      </div>

                      {/* Metrics */}
                      <div className="mt-4 grid grid-cols-3 gap-3">

                        <div className="rounded-2xl bg-zinc-100 p-3 dark:bg-zinc-900">
                          <p className="text-[10px] text-zinc-400">
                            Occurrences
                          </p>
                          <p className="mt-1 text-lg font-bold text-zinc-900 dark:text-white">
                            09
                          </p>
                        </div>

                        <div className="rounded-2xl bg-zinc-100 p-3 dark:bg-zinc-900">
                          <p className="text-[10px] text-zinc-400">
                            Win rate
                          </p>
                          <p className="mt-1 text-lg font-bold text-purple-600">
                            77.8%
                          </p>
                        </div>

                        <div className="rounded-2xl bg-zinc-100 p-3 dark:bg-zinc-900">
                          <p className="text-[10px] text-zinc-400">
                            Avg return
                          </p>
                          <p className="mt-1 text-lg font-bold text-emerald-500">
                            +1.33%
                          </p>
                        </div>

                      </div>

                      {/* Chart */}
                      <div className="mt-5 rounded-2xl border border-zinc-100 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">

                        <div className="flex h-28 items-end gap-2">

                          {[35, 52, 44, 70, 58, 82, 66, 92, 76, 100].map(
                            (height, index) => (
                              <div
                                key={index}
                                className="flex-1 rounded-t-md bg-gradient-to-t from-purple-500 to-blue-400 opacity-80 transition-all duration-500 hover:opacity-100"
                                style={{
                                  height: `${height}%`,
                                }}
                              />
                            )
                          )}

                        </div>

                        <div className="mt-3 flex justify-between text-[9px] text-zinc-400">
                          <span>Historical</span>
                          <span>Experiment result</span>
                        </div>

                      </div>

                    </div>
                  )}

                  {/* ================================================= */}
                  {/* 02 — MAYA THERAPY */}
                  {/* ================================================= */}
                  {active === 2 && (
                    <div className="bg-[#f8fbff] p-5 sm:p-7 dark:bg-zinc-950">

                      <div className="rounded-[1.5rem] bg-gradient-to-br from-blue-50 to-cyan-50 p-6 dark:from-blue-500/10 dark:to-cyan-500/5">

                        <p className="text-xs font-semibold uppercase tracking-wider text-blue-500">
                          Therapy & Wellness
                        </p>

                        <h4 className="mt-3 max-w-xs text-2xl font-bold leading-tight text-zinc-900 dark:text-white">
                          A calmer space to begin.
                        </h4>

                        <p className="mt-3 max-w-sm text-xs leading-5 text-zinc-500">
                          A thoughtful digital experience designed around
                          clarity, warmth and simple navigation.
                        </p>

                        <button className="mt-5 rounded-full bg-zinc-900 px-4 py-2 text-xs font-medium text-white dark:bg-white dark:text-zinc-900">
                          Book a session
                        </button>

                      </div>

                      <div className="mt-5 grid grid-cols-2 gap-3">

                        <div className="rounded-2xl border border-blue-100 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">

                          <div className="mb-3 h-8 w-8 rounded-xl bg-blue-100 dark:bg-blue-500/10" />

                          <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                            Individual therapy
                          </p>

                          <p className="mt-1 text-[10px] text-zinc-400">
                            Support & guidance
                          </p>

                        </div>

                        <div className="rounded-2xl border border-cyan-100 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">

                          <div className="mb-3 h-8 w-8 rounded-xl bg-cyan-100 dark:bg-cyan-500/10" />

                          <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                            Online sessions
                          </p>

                          <p className="mt-1 text-[10px] text-zinc-400">
                            Flexible experience
                          </p>

                        </div>

                      </div>

                    </div>
                  )}

                  {/* ================================================= */}
                  {/* 03 — SKILL TO PROJECT */}
                  {/* ================================================= */}
                  {active === 3 && (
                    <div className="bg-[#f8fffc] p-5 sm:p-7 dark:bg-zinc-950">

                      <div className="flex items-center justify-between">

                        <div>
                          <p className="text-xs font-medium text-zinc-400">
                            Your skills
                          </p>

                          <h4 className="mt-1 text-lg font-bold text-zinc-900 dark:text-white">
                            Project Generator
                          </h4>
                        </div>

                        <div className="rounded-xl bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-600 dark:bg-emerald-500/10">
                          BUILD
                        </div>

                      </div>

                      {/* Skills */}
                      <div className="mt-5 rounded-2xl bg-white p-4 shadow-sm dark:bg-zinc-900">

                        <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                          Selected skills
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">

                          {["React", "JavaScript", "Node.js", "MongoDB"].map(
                            (skill) => (
                              <span
                                key={skill}
                                className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"
                              >
                                {skill}
                              </span>
                            )
                          )}

                        </div>

                      </div>

                      {/* Roadmap */}
                      <div className="mt-4 rounded-2xl border border-emerald-100 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">

                        <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                          Generated roadmap
                        </p>

                        <div className="mt-4 space-y-3">

                          {[
                            "Build foundation",
                            "Create core features",
                            "Connect backend",
                            "Complete project",
                          ].map((step, index) => (
                            <div
                              key={step}
                              className="flex items-center gap-3"
                            >

                              <div
                                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                                  index < 2
                                    ? "bg-emerald-500 text-white"
                                    : "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10"
                                }`}
                              >
                                {index + 1}
                              </div>

                              <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-800" />

                              <span className="w-32 text-right text-[10px] font-medium text-zinc-600 dark:text-zinc-400">
                                {step}
                              </span>

                            </div>
                          ))}

                        </div>

                      </div>

                    </div>
                  )}

                  {/* ================================================= */}
                  {/* 04 — VIDEO ANNOTATION */}
                  {/* ================================================= */}
                  {active === 4 && (
                    <div className="bg-[#fffaf8] p-5 sm:p-7 dark:bg-zinc-950">

                      {/* Video */}
                      <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-2xl bg-zinc-900">

                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-pink-500/10 to-transparent" />

                        <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-sm text-zinc-900 shadow-lg">
                          ▶
                        </div>

                        <div className="absolute bottom-3 left-3 rounded-md bg-black/50 px-2 py-1 text-[9px] text-white">
                          04:32 / 08:15
                        </div>

                        <div className="absolute right-3 top-3 rounded-full bg-white/10 px-2 py-1 text-[9px] text-white backdrop-blur">
                          Annotation mode
                        </div>

                      </div>

                      {/* Annotation */}
                      <div className="mt-4 rounded-2xl border border-orange-100 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">

                        <div className="flex items-center justify-between">

                          <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                            Timeline
                          </p>

                          <span className="text-[10px] font-medium text-orange-500">
                            4 annotations
                          </span>

                        </div>

                        <div className="relative mt-5 h-2 rounded-full bg-zinc-100 dark:bg-zinc-800">

                          <div className="h-full w-[55%] rounded-full bg-gradient-to-r from-orange-400 to-pink-500" />

                          <span className="absolute left-[22%] top-1/2 h-4 w-1 -translate-y-1/2 rounded-full bg-orange-500" />

                          <span className="absolute left-[42%] top-1/2 h-4 w-1 -translate-y-1/2 rounded-full bg-pink-500" />

                          <span className="absolute left-[67%] top-1/2 h-4 w-1 -translate-y-1/2 rounded-full bg-purple-500" />

                        </div>

                        <div className="mt-4 flex items-center justify-between text-[9px] text-zinc-400">
                          <span>00:00</span>
                          <span>04:32</span>
                          <span>08:15</span>
                        </div>

                      </div>

                    </div>
                  )}

                </div>

                {/* Floating project number */}
                <div className="absolute -right-3 -top-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-950 text-sm font-bold text-white shadow-xl dark:bg-white dark:text-zinc-900">
                  {project.number}
                </div>

              </div>

            </div>

            {/* ================================================= */}
            {/* RIGHT — INFORMATION */}
            {/* ================================================= */}
            <div className="flex flex-col justify-between bg-white p-8 md:p-12 dark:bg-zinc-900">

              <div>

                {/* Category */}
                <div className="flex items-center gap-3">

                  <span className="h-2 w-2 rounded-full bg-purple-500" />

                  <p className="text-sm font-semibold text-purple-500">
                    {project.category}
                  </p>

                </div>

                {/* Title */}
                <h3 className="mt-5 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-5 max-w-xl leading-7 text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-7 flex flex-wrap gap-2">

                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-purple-500/30 dark:hover:bg-purple-500/10 dark:hover:text-purple-300"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                {/* Highlights */}
                <div className="mt-8">

                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                    What I worked on
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">

                    {project.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="group flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400"
                      >

                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-50 text-[10px] font-bold text-purple-600 transition-transform duration-300 group-hover:scale-110 dark:bg-purple-500/10 dark:text-purple-400">
                          ✓
                        </span>

                        <span>{highlight}</span>

                      </div>
                    ))}

                  </div>

                </div>

              </div>

              {/* ================= BOTTOM ================= */}
              <div className="mt-10 border-t border-zinc-200 pt-6 dark:border-zinc-800">

                <div className="flex flex-wrap items-center justify-between gap-5">

                  {/* Links */}
                  <div className="flex gap-3">

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-zinc-200 px-5 py-2.5 text-sm font-medium text-zinc-800 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-900 hover:text-white dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-white dark:hover:text-zinc-900"
                      >
                        GitHub ↗
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-white dark:text-zinc-900"
                      >
                        Live Demo ↗
                      </a>
                    )}

                  </div>

                  {/* Previous / Next */}
                  <div className="flex gap-2">

                    <button
                      onClick={previousProject}
                      aria-label="Previous project"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-lg transition-all duration-300 hover:-translate-x-1 hover:bg-zinc-900 hover:text-white dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:hover:bg-white dark:hover:text-zinc-900"
                    >
                      ←
                    </button>

                    <button
                      onClick={nextProject}
                      aria-label="Next project"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-lg transition-all duration-300 hover:translate-x-1 hover:bg-zinc-900 hover:text-white dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:hover:bg-white dark:hover:text-zinc-900"
                    >
                      →
                    </button>

                  </div>

                </div>

                {/* Progress */}
                <div className="mt-6 flex items-center gap-3">

                  <span className="text-[10px] font-semibold text-zinc-400">
                    {project.number}
                  </span>

                  <div className="h-1 flex-1 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">

                    <div
                      className={`h-full bg-gradient-to-r ${project.accent} transition-all duration-700`}
                      style={{
                        width: `${((active + 1) / projects.length) * 100}%`,
                      }}
                    />

                  </div>

                  <span className="text-[10px] font-semibold text-zinc-400">
                    04
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* ================================================= */}
          {/* PROJECT SELECTOR */}
          {/* ================================================= */}
          <div className="border-t border-zinc-200 bg-white/80 p-4 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/70">

            <div className="grid grid-cols-2 gap-2 md:grid-cols-4">

              {projects.map((item, index) => (
                <button
                  key={item.number}
                  onClick={() => setActive(index)}
                  className={`group rounded-xl px-4 py-3 text-left transition-all duration-300 ${
                    active === index
                      ? "bg-zinc-950 text-white shadow-md dark:bg-white dark:text-zinc-950"
                      : "text-zinc-500 hover:-translate-y-0.5 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900"
                  }`}
                >

                  <div className="flex items-center justify-between">

                    <span className="text-xs font-semibold opacity-60">
                      {item.number}
                    </span>

                    {active === index && (
                      <span className="text-xs text-purple-300">
                        ●
                      </span>
                    )}

                  </div>

                  <div className="mt-1 truncate text-sm font-medium">
                    {item.title}
                  </div>

                </button>
              ))}

            </div>

          </div>

        </div>

      </div>

      {/* ================= ANIMATION ================= */}
      <style jsx>{`
        @keyframes projectIn {
          from {
            opacity: 0;
            transform: translateX(24px) scale(0.97);
          }

          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}


function SkillsExplorer() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skills = {
    frontend: {
      label: "Frontend",
      number: "01",
      title: "Interfaces that feel good to use.",
      description:
        "My primary focus is frontend development — building responsive, interactive and clean user interfaces.",
      skills: [
        {
          name: "HTML",
          level: "Strong",
          icon: "◇",
        },
        {
          name: "CSS",
          level: "Strong",
          icon: "✦",
        },
        {
          name: "JavaScript",
          level: "Strong",
          icon: "JS",
        },
        {
          name: "React.js",
          level: "Primary",
          icon: "⚛",
        },
        {
          name: "Next.js",
          level: "Learning",
          icon: "N",
        },
        {
          name: "TypeScript",
          level: "Learning",
          icon: "TS",
        },
        {
          name: "Tailwind CSS",
          level: "Comfortable",
          icon: "⌁",
        },
      ],
    },

    backend: {
      label: "Backend",
      number: "02",
      title: "Understanding what happens behind the UI.",
      description:
        "I work with backend fundamentals to connect frontend applications with APIs, databases and server-side logic.",
      skills: [
        {
          name: "Node.js",
          level: "Basics",
          icon: "N",
        },
        {
          name: "Express.js",
          level: "Basics",
          icon: "E",
        },
        {
          name: "MongoDB",
          level: "Basics",
          icon: "M",
        },
        {
          name: "REST APIs",
          level: "Basics",
          icon: "↗",
        },
        {
          name: "Mongoose",
          level: "Basics",
          icon: "◇",
        },
      ],
    },

    academic: {
      label: "CS & Academic",
      number: "03",
      title: "The fundamentals behind the code.",
      description:
        "My academic foundation includes programming, databases, operating systems, data structures and software fundamentals.",
      skills: [
        {
          name: "C++",
          level: "Comfortable",
          icon: "C+",
        },
        {
          name: "SQL",
          level: "Comfortable",
          icon: "DB",
        },
        {
          name: "DSA",
          level: "Core",
          icon: "⌘",
        },
        {
          name: "DBMS",
          level: "Core",
          icon: "▦",
        },
        {
          name: "OOP",
          level: "Core",
          icon: "◎",
        },
        {
          name: "Operating Systems",
          level: "Core",
          icon: "OS",
        },
      ],
    },

    tools: {
      label: "Tools",
      number: "04",
      title: "The tools behind my workflow.",
      description:
        "Tools I use for development, version control, design, collaboration and everyday productivity.",
      skills: [
        {
          name: "Git",
          level: "Comfortable",
          icon: "⌘",
        },
        {
          name: "GitHub",
          level: "Comfortable",
          icon: "GH",
        },
        {
          name: "VS Code",
          level: "Daily",
          icon: "</>",
        },
        {
          name: "Figma",
          level: "Working",
          icon: "F",
        },
        {
          name: "Canva",
          level: "Working",
          icon: "C",
        },
      ],
    },
  };

  const active =
    skills[activeCategory as keyof typeof skills];

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">

      {/* ================= CATEGORY SELECTOR ================= */}
      <div className="rounded-[2rem] border border-zinc-200 bg-white p-4 shadow-sm">

        <div className="px-4 pb-4 pt-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
            Explore my stack
          </p>

          <p className="mt-2 text-sm leading-5 text-zinc-500">
            Click a category to explore.
          </p>
        </div>

        <div className="space-y-2">

          {Object.entries(skills).map(([key, item]) => {
            const isActive = activeCategory === key;

            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`group flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left transition-all duration-300 ${
                  isActive
                    ? "bg-zinc-950 text-white shadow-lg"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
                }`}
              >

                <div className="flex items-center gap-3">

                  <span
                    className={`text-xs font-semibold ${
                      isActive
                        ? "text-purple-300"
                        : "text-zinc-400"
                    }`}
                  >
                    {item.number}
                  </span>

                  <span className="font-medium">
                    {item.label}
                  </span>

                </div>

                <span
                  className={`text-lg transition-transform duration-300 ${
                    isActive
                      ? "translate-x-1 text-purple-300"
                      : "text-zinc-300 group-hover:translate-x-1"
                  }`}
                >
                  →
                </span>

              </button>
            );
          })}

        </div>

        {/* Small indicator */}
        <div className="mt-5 rounded-2xl bg-zinc-50 p-4">
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span className="h-2 w-2 rounded-full bg-purple-500" />
            Active focus
          </div>

          <p className="mt-1 text-sm font-medium text-zinc-800">
            {active.label}
          </p>
        </div>

      </div>

      {/* ================= ACTIVE SKILL PANEL ================= */}
      <div
        key={activeCategory}
        className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-sm sm:p-10"
      >

        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple-100/70 blur-3xl" />

        <div className="relative">

          {/* Header */}
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">

            <div>
              <div className="mb-5 flex items-center gap-3">

                <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600">
                  {active.number}
                </span>

                <span className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
                  {active.label}
                </span>

              </div>

              <h3 className="max-w-xl text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                {active.title}
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-500 sm:text-base">
                {active.description}
              </p>
            </div>

            {/* Category visual */}
            <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-zinc-950 text-xl text-white shadow-lg sm:flex">
              {active.number}
            </div>

          </div>

          {/* Skills Grid */}
          <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">

            {active.skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group rounded-2xl border border-zinc-200 bg-zinc-50/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:bg-white hover:shadow-lg"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xs font-bold text-zinc-700 shadow-sm transition-all duration-300 group-hover:bg-zinc-950 group-hover:text-white">
                      {skill.icon}
                    </div>

                    <div>
                      <p className="font-semibold text-zinc-900">
                        {skill.name}
                      </p>

                      <p className="mt-0.5 text-xs text-zinc-400">
                        {skill.level}
                      </p>
                    </div>

                  </div>

                  <span className="text-zinc-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-purple-500">
                    ↗
                  </span>

                </div>

              </div>
            ))}

          </div>

          {/* Bottom line */}
          <div className="mt-8 flex items-center gap-3 text-xs text-zinc-400">

            <span className="h-px flex-1 bg-zinc-200" />

            <span>
              {active.skills.length} skills in this category
            </span>

            <span className="h-px flex-1 bg-zinc-200" />

          </div>

        </div>

      </div>

    </div>
  );
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [cardActive, setCardActive] = useState(false);

  return (
    <main className={darkMode ? "min-h-screen bg-[#151515] text-white transition-colors duration-500" : "min-h-screen bg-[#f8f7f4] text-[#1f1f1f] transition-colors duration-500"}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-black/[0.06] bg-[#f8f7f4]/80 backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#151515]/80">
        <div className="mx-auto flex h-[78px] max-w-[1280px] items-center justify-between px-6 lg:px-10">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-[15px] bg-[#1f1f1f] text-sm font-bold text-white shadow-sm">
              KR
            </span>
            <span className="hidden text-[15px] font-semibold sm:block">Kirti Rajput</span>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-black/[0.07] bg-white/75 p-1.5 shadow-sm backdrop-blur md:flex dark:border-white/[0.08] dark:bg-white/[0.06]">
            {[
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Experience", "#experience"],
              ["Education", "#education"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-full px-4 py-2 text-[14px] text-[#555] transition-all duration-200 hover:bg-[#f0eefb] hover:text-[#4f46e5] dark:text-white/65 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
           

            <a
              href="/resume.pdf"
              className="hidden rounded-full bg-[#1f1f1f] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:flex sm:items-center sm:gap-2"
            >
              <span>↓</span>
              Download CV
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="top"
        className="relative overflow-hidden"
      >
        <div className="pointer-events-none absolute -left-40 top-32 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl dark:bg-blue-900/20" />
        <div className="pointer-events-none absolute right-[-90px] top-[-80px] h-[430px] w-[430px] rounded-full bg-purple-100/80 blur-3xl dark:bg-purple-900/20" />

        <div className="relative mx-auto grid min-h-[calc(100vh-78px)] max-w-[1280px] items-center gap-8 px-6 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-10">
          {/* Left */}
          <div className="relative z-10 max-w-[720px]">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/80 px-4 py-2 text-sm shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              B.Tech CSE Graduate
            </div>

            <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.28em] text-[#5548ed]">
              Frontend Developer
            </p>

            <h1 className="max-w-[700px] text-[clamp(3.25rem,6.2vw,5.8rem)] font-bold leading-[0.94] tracking-[-0.055em]">
              Hi, I’m Kirti Rajput.
              <br />
              I build things{" "}
              <span className="relative inline-block text-[#6646e8]">
                for the web.
                <span className="absolute -bottom-1 left-1 h-[5px] w-[88%] -rotate-2 rounded-full bg-[#b8a7ff]/70" />
              </span>
            </h1>

            <p className="mt-7 max-w-[650px] text-[17px] leading-7 text-[#666] dark:text-white/65 sm:text-[18px]">
              B.Tech CSE graduate focused on building responsive, user-focused
              web experiences with React, Next.js and modern web technologies.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full bg-[#1f1f1f] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="text-base">&lt;/&gt;</span>
                View Projects
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>

              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-3 rounded-full border border-[#d7d4ce] bg-white/80 px-6 py-3.5 text-sm font-semibold shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#8f7df3] hover:shadow-lg dark:border-white/10 dark:bg-white/10"
              >
                <span>▣</span>
                Download Resume
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-5 text-sm text-[#666] dark:text-white/60">
              <a href="https://github.com/kirtirajput123" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 transition-colors hover:text-[#4f46e5]">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white dark:border-white/10 dark:bg-white/10">◉</span>
                GitHub <span className="text-xs">↗</span>
              </a>

              <span className="h-5 w-px bg-black/10 dark:bg-white/10" />

              <a href={LINKEDIN} className="group inline-flex items-center gap-2 transition-colors hover:text-[#4f46e5]">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white text-xs font-bold dark:border-white/10 dark:bg-white/10">in</span>
                LinkedIn <span className="text-xs">↗</span>
              </a>

              <span className="h-5 w-px bg-black/10 dark:bg-white/10" />

              <a href={`mailto:${EMAIL}`} className="group inline-flex items-center gap-2 transition-colors hover:text-[#4f46e5]">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white dark:border-white/10 dark:bg-white/10">✉</span>
                Email <span className="text-xs">↗</span>
              </a>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-3.5 py-2 text-xs font-medium text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Available for opportunities
            </div>
          </div>

          {/* Right interactive card */}
          <div className="relative mx-auto flex w-full max-w-[500px] items-center justify-center lg:justify-end">
            <div className="relative h-[470px] w-[410px] max-w-full sm:h-[500px] sm:w-[455px]">
              <div className="absolute inset-5 rounded-[42px] bg-gradient-to-br from-[#eee7ff] via-white to-[#dceeff] shadow-[0_30px_80px_rgba(84,71,160,0.13)] dark:from-[#29233d] dark:via-[#202020] dark:to-[#172637]" />

              <div
                onClick={() => setCardActive((value) => !value)}
                className={`absolute inset-[38px] cursor-pointer rounded-[34px] border border-white/80 bg-gradient-to-br from-[#f3edff] via-[#f8f8ff] to-[#e4f2ff] shadow-[0_20px_55px_rgba(58,48,110,0.12)] transition-all duration-500 dark:border-white/10 dark:from-[#28243a] dark:via-[#20212a] dark:to-[#1d2c3b] ${
                  cardActive
                    ? "-rotate-2 scale-[0.985] shadow-[0_28px_70px_rgba(91,73,190,0.25)]"
                    : "rotate-0"
                }`}
              >
                <div className="absolute left-6 top-6 rounded-full border border-black/5 bg-white/80 px-4 py-2 text-xs text-[#666] shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white/65">
                  Building with curiosity
                </div>

                {/* Tech pills */}
                <span className="absolute right-5 top-20 rounded-full border border-black/5 bg-white px-4 py-2 text-xs font-medium shadow-sm transition-transform duration-500 hover:-translate-x-2 dark:border-white/10 dark:bg-white/10">
                  ⚛ React
                </span>
                <span className="absolute right-3 top-32 translate-x-1 rounded-full border border-black/5 bg-white px-4 py-2 text-xs font-medium shadow-sm transition-transform duration-500 hover:-translate-x-2 dark:border-white/10 dark:bg-white/10">
                  ◉ Next.js
                </span>
                <span className="absolute right-5 top-44 rounded-full border border-black/5 bg-white px-4 py-2 text-xs font-medium shadow-sm transition-transform duration-500 hover:-translate-x-2 dark:border-white/10 dark:bg-white/10">
                  TS TypeScript
                </span>

                {/* Smaller central identity */}
                <div className={`absolute left-1/2 top-[52%] flex h-[142px] w-[142px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[14px] border-white/90 bg-[#1f1f1f] text-[42px] font-bold text-white shadow-[0_18px_35px_rgba(0,0,0,0.18)] transition-all duration-700 dark:border-white/15 ${
                  cardActive ? "rotate-[18deg] scale-90" : "rotate-0 scale-100"
                }`}>
                  KR
                </div>

                {/* Orbit dots */}
                <span className={`absolute left-[22%] top-[48%] h-3 w-3 rounded-full bg-[#8e7cf5] transition-all duration-700 ${cardActive ? "translate-x-10 -translate-y-5" : ""}`} />
                <span className={`absolute right-[24%] bottom-[27%] h-2.5 w-2.5 rounded-full bg-[#6fa9ff] transition-all duration-700 ${cardActive ? "-translate-x-8 translate-y-5" : ""}`} />
                <span className={`absolute left-[29%] bottom-[21%] h-2 w-2 rounded-full bg-[#b9a7ff] transition-all duration-700 ${cardActive ? "-translate-x-5" : ""}`} />

                <div className={`absolute bottom-[-18px] right-[-10px] rounded-[20px] bg-[#1f1f1f] px-5 py-4 text-white shadow-xl transition-all duration-500 ${
                  cardActive ? "-translate-y-3 rotate-1" : ""
                }`}>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/55">Focus</p>
                  <p className="mt-1 text-sm font-semibold">Frontend · UX · Products</p>
                </div>

                <div className="absolute bottom-6 left-6 text-[10px] font-medium uppercase tracking-[0.2em] text-[#777] dark:text-white/40">
                  Click to interact
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
<section
  id="about"
  className="border-t border-black/[0.06] bg-white dark:border-white/[0.08] dark:bg-[#191919]"
>
  <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10 lg:py-24">

    {/* Section heading */}
    <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
      <div>
        <p className="text-[13px] font-bold uppercase tracking-[0.28em] text-[#5548ed]">
          About Me
        </p>

        <h2 className="mt-5 max-w-[700px] text-4xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
          I like making the web feel{" "}
          <span className="text-[#6646e8]">simple.</span>
        </h2>
      </div>

      <p className="max-w-[360px] text-sm leading-6 text-[#777] dark:text-white/50">
        Frontend-focused developer who enjoys turning ideas into clean,
        responsive and useful digital experiences.
      </p>
    </div>

    {/* Main About Grid */}
    <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">

      {/* LEFT — Story Card */}
      <div className="group relative overflow-hidden rounded-[32px] border border-black/[0.07] bg-[#f8f7f4] p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(70,55,140,0.10)] dark:border-white/10 dark:bg-white/[0.045] lg:p-10">

        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sm font-bold text-[#6646e8] shadow-sm dark:bg-white/10">
              KR
            </span>

            <span className="text-xs uppercase tracking-[0.2em] text-[#999] dark:text-white/30">
              01 / Story
            </span>
          </div>

          <h3 className="mt-14 max-w-[600px] text-2xl font-semibold tracking-tight sm:text-3xl">
            From learning code to building real interfaces.
          </h3>

          <div className="mt-6 max-w-[650px] space-y-4 text-[16px] leading-7 text-[#666] dark:text-white/55">
            <p>
              I’m a B.Tech Computer Science graduate with a strong interest
              in frontend development and creating thoughtful user
              experiences.
            </p>

            <p>
              I work primarily with HTML, CSS, JavaScript, React.js and
              Next.js, while also building my foundation in Node.js,
              Express.js, MongoDB and REST APIs.
            </p>

            <p>
              I enjoy learning through projects — building something,
              debugging what breaks, and understanding how to make it better.
            </p>
          </div>

          {/* Bottom mini stats */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">

            <div className="rounded-2xl border border-black/[0.06] bg-white/80 p-4 dark:border-white/10 dark:bg-white/[0.05]">
              <p className="text-2xl font-bold">8.71</p>
              <p className="mt-1 text-xs text-[#888] dark:text-white/40">
                CGPA
              </p>
            </div>

            <div className="rounded-2xl border border-black/[0.06] bg-white/80 p-4 dark:border-white/10 dark:bg-white/[0.05]">
              <p className="text-2xl font-bold">2026</p>
              <p className="mt-1 text-xs text-[#888] dark:text-white/40">
                Graduate
              </p>
            </div>

            <div className="rounded-2xl border border-black/[0.06] bg-white/80 p-4 dark:border-white/10 dark:bg-white/[0.05]">
              <p className="text-2xl font-bold">01+</p>
              <p className="mt-1 text-xs text-[#888] dark:text-white/40">
                Internship
              </p>
            </div>

          </div>
        </div>

        {/* Decorative background */}
        <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#ddd3ff]/60 blur-3xl transition-transform duration-700 group-hover:scale-125 dark:bg-[#6d55d8]/10" />

        <div className="pointer-events-none absolute right-10 top-10 h-2 w-2 rounded-full bg-[#8d7bf2] transition-all duration-700 group-hover:translate-x-3 group-hover:-translate-y-2" />
      </div>

      {/* RIGHT COLUMN */}
      <div className="grid gap-5">

        {/* Frontend card */}
        <div className="group relative overflow-hidden rounded-[32px] border border-black/[0.07] bg-[#eeeaff] p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(95,75,180,0.15)] dark:border-white/10 dark:bg-[#28243b]">

          <div className="flex items-start justify-between">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-lg text-[#6646e8] shadow-sm dark:bg-white/10">
              &lt;/&gt;
            </span>

            <span className="text-xs text-[#8174a9] dark:text-white/30">
              02
            </span>
          </div>

          <h3 className="mt-9 text-xl font-semibold">
            Frontend first.
          </h3>

          <p className="mt-3 text-sm leading-6 text-[#686278] dark:text-white/55">
            React, Next.js, JavaScript and responsive UI are where I spend
            most of my time.
          </p>

          {/* Hover tech row */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["React", "Next.js", "JavaScript"].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-white/80 px-3 py-1.5 text-xs text-[#655d78] transition-transform duration-300 group-hover:-translate-y-0.5 dark:bg-white/10 dark:text-white/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Learning card */}
        <div className="group relative overflow-hidden rounded-[32px] border border-black/[0.07] bg-[#f8f7f4] p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-white/[0.045]">

          <div className="flex items-start justify-between">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-lg text-[#6646e8] shadow-sm dark:bg-white/10">
              ✦
            </span>

            <span className="text-xs text-[#aaa] dark:text-white/30">
              03
            </span>
          </div>

          <h3 className="mt-9 text-xl font-semibold">
            Build. Break. Learn.
          </h3>

          <p className="mt-3 text-sm leading-6 text-[#6b6b6b] dark:text-white/55">
            I learn best by working on real projects, debugging problems and
            understanding what happens under the hood.
          </p>

          <div className="mt-6 flex items-center gap-2 text-xs font-medium text-[#6646e8]">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Always learning
            <span className="ml-auto text-base transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>

      </div>
    </div>

    {/* Bottom philosophy strip */}
    <div className="mt-5 grid gap-5 md:grid-cols-3">

      <div className="group rounded-[26px] border border-black/[0.07] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#faf9ff] dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.06]">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#aaa]">
          I care about
        </p>

        <p className="mt-4 text-lg font-semibold">
          Clean interfaces
        </p>

        <p className="mt-2 text-sm leading-6 text-[#777] dark:text-white/45">
          Simple layouts, clear hierarchy and thoughtful interactions.
        </p>
      </div>

      <div className="group rounded-[26px] border border-black/[0.07] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#faf9ff] dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.06]">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#aaa]">
          I enjoy
        </p>

        <p className="mt-4 text-lg font-semibold">
          Turning ideas into UI
        </p>

        <p className="mt-2 text-sm leading-6 text-[#777] dark:text-white/45">
          Taking an idea and figuring out how it should actually feel.
        </p>
      </div>

      <div className="group rounded-[26px] border border-black/[0.07] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#faf9ff] dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.06]">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#aaa]">
          Right now
        </p>

        <p className="mt-4 text-lg font-semibold">
          Looking for opportunities
        </p>

        <p className="mt-2 text-sm leading-6 text-[#777] dark:text-white/45">
          Ready to contribute, learn and grow with a technical team.
        </p>
      </div>

    </div>
  </div>
</section>
 
 
  {/* ================= SKILLS ================= */}
<section
  id="skills"
  className="relative overflow-hidden bg-[#f7f6f2] px-6 py-24 sm:px-10 lg:px-16"
>
  <div className="mx-auto max-w-7xl">

    {/* Heading */}
    <div className="mb-14 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-600">
        Skills & Toolkit
      </p>

      <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
        Tools I use to build.
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
        A practical stack built around frontend development, backend
        fundamentals, computer science, and the tools I use to turn ideas
        into working products.
      </p>
    </div>

    {/* Interactive Skills */}
    <SkillsExplorer />

    {/* Currently Exploring */}
    <div className="mt-10 overflow-hidden rounded-[2rem] bg-zinc-950 p-7 text-white shadow-xl sm:p-9">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div className="max-w-xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
            Currently exploring
          </div>

          <h3 className="text-2xl font-semibold sm:text-3xl">
            Going beyond the comfortable zone.
          </h3>

          <p className="mt-3 text-sm leading-6 text-zinc-400 sm:text-base">
            I’m continuously expanding my development workflow with tools
            and concepts that help me write better, scalable software.
          </p>
        </div>

        {/* Learning Pills */}
        <div className="flex max-w-xl flex-wrap gap-3">

          {[
            "Advanced TypeScript",
            "Testing",
            "Docker",
            "Cloud / AWS",
            "System Design",
            "Performance",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white"
            >
              {item}
            </span>
          ))}

        </div>
      </div>
    </div>

  </div>
</section>


<ProjectSlider />

{/* EXPERIENCE */}
<section id="experience" className="relative overflow-hidden bg-[#f7f7f5] py-24">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    {/* Section Heading */}
    <div className="mb-14 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">
        Experience
      </p>

      <h2 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
        Where I’ve learned by building.
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
        My experience has been about turning concepts into usable interfaces,
        learning through real projects, and improving with every build.
      </p>
    </div>

    {/* Experience Card */}
    <div className="group relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(0,0,0,0.1)]">

      {/* Decorative gradient */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-200/40 blur-3xl transition-transform duration-700 group-hover:scale-125" />

      <div className="relative grid lg:grid-cols-[0.8fr_1.2fr]">

        {/* LEFT — EXPERIENCE TYPE */}
        <div className="relative border-b border-zinc-200 p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">

          <div className="flex h-full flex-col justify-between">

            <div>
              {/* Number */}
              <div className="mb-10 flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-400">
                  01
                </span>

                <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-700">
                  Internship
                </span>
              </div>

              {/* Main Experience Type */}
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Experience type
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                Internship
              </h3>

              <div className="mt-8">
                <p className="text-sm font-medium text-zinc-400">
                  Role
                </p>

                <p className="mt-1 text-xl font-semibold text-zinc-900">
                  React.js Intern
                </p>
              </div>

              <div className="mt-6">
                <p className="text-sm font-medium text-zinc-400">
                  Company
                </p>

                <p className="mt-1 text-lg font-medium text-zinc-800">
                  Celebal Technologies
                </p>
              </div>

              <div className="mt-6">
                <p className="text-sm font-medium text-zinc-400">
                  Duration
                </p>

                <p className="mt-1 text-base font-medium text-zinc-700">
                  May 2025 — July 2025
                </p>
              </div>
            </div>

            {/* Bottom mini visual */}
            <div className="mt-12 hidden lg:block">
              <div className="relative h-28 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                <div className="flex gap-2">
                  <div className="h-2 w-2 rounded-full bg-zinc-300" />
                  <div className="h-2 w-2 rounded-full bg-zinc-300" />
                  <div className="h-2 w-2 rounded-full bg-zinc-300" />
                </div>

                <div className="mt-5 flex gap-3">
                  <div className="h-10 w-10 rounded-xl bg-violet-100" />
                  <div className="flex-1 space-y-2">
                    <div className="h-2 w-2/3 rounded-full bg-zinc-200" />
                    <div className="h-2 w-1/2 rounded-full bg-zinc-100" />
                  </div>
                </div>

                <div className="absolute -bottom-5 -right-5 h-20 w-20 rounded-full bg-violet-100 blur-xl" />
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT — WORK DETAILS */}
        <div className="p-8 sm:p-10 lg:p-12">

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-violet-500" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              What I worked on
            </p>
          </div>

          <h4 className="mt-6 max-w-xl text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl">
            Building React interfaces and learning how real products come together.
          </h4>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-500">
            During my internship at Celebal Technologies, I worked on React-based
            interfaces, reusable components, APIs and Hooks while gaining practical
            experience through real development workflows.
          </p>

          {/* Work Areas */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">

            <div className="group/item rounded-2xl border border-zinc-200 bg-zinc-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:bg-violet-50/50">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-bold text-violet-600 shadow-sm">
                01
              </div>

              <h5 className="font-semibold text-zinc-900">
                React Interfaces
              </h5>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Developed responsive and reusable React-based interfaces.
              </p>
            </div>

            <div className="group/item rounded-2xl border border-zinc-200 bg-zinc-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/50">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-bold text-blue-600 shadow-sm">
                02
              </div>

              <h5 className="font-semibold text-zinc-900">
                Reusable Components
              </h5>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Focused on component-based development and cleaner UI structure.
              </p>
            </div>

            <div className="group/item rounded-2xl border border-zinc-200 bg-zinc-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:bg-cyan-50/50">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-bold text-cyan-600 shadow-sm">
                03
              </div>

              <h5 className="font-semibold text-zinc-900">
                APIs & Hooks
              </h5>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Worked with APIs, React Hooks and application state patterns.
              </p>
            </div>

            <div className="group/item rounded-2xl border border-zinc-200 bg-zinc-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-50/50">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-bold text-emerald-600 shadow-sm">
                04
              </div>

              <h5 className="font-semibold text-zinc-900">
                Team Workflow
              </h5>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Learned practical development workflows through collaboration.
              </p>
            </div>

          </div>

          {/* Takeaway */}
          <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-zinc-900 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                What I took from the experience
              </p>

              <p className="mt-2 text-base font-medium text-white">
                Learn → Build → Improve
              </p>
            </div>

            <div className="text-3xl font-light text-zinc-600">
              →
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

 {/* Education & Certifications */}
<section
  id="education"
  className="border-t border-[#e5e3de] bg-white"
>
  <div className="mx-auto max-w-6xl px-6 py-24">

    {/* Heading */}
    <div className="mb-14">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4f46e5]">
        Education & Certifications
      </p>

      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        Learning that shaped me.
      </h2>

      <p className="mt-4 max-w-2xl leading-7 text-[#666]">
        From school fundamentals to computer science, every stage has
        contributed to the way I learn, solve problems and build.
      </p>
    </div>


    {/* Education + Certifications */}
    <div className="grid gap-6 md:grid-cols-2">

      {/* ================= EDUCATION SLIDER ================= */}
      <EducationSlider />


      {/* ================= CERTIFICATIONS ================= */}
      <div className="rounded-2xl border border-[#e2e0db] bg-[#f8f7f4] p-7">

        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-[#4f46e5]">
              Certifications
            </p>

            <h3 className="mt-2 text-2xl font-semibold tracking-tight">
              Technical credentials.
            </h3>
          </div>

          <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#777]">
            04
          </span>
        </div>


        <div className="mt-8 space-y-3">

          {/* Certification 1 */}
          <div className="group flex items-center gap-4 rounded-xl border border-[#e2e0db] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#c7c4ff] hover:shadow-sm">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eeedff] text-sm font-bold text-[#4f46e5] transition-transform duration-300 group-hover:scale-110">
              IF
            </div>

            <div className="min-w-0 flex-1">
              <h4 className="font-semibold">
                Frontend Development
              </h4>

              <p className="mt-1 text-sm text-[#777]">
                Infosys Springboard
              </p>
            </div>

            <span className="text-lg text-[#bbb] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#4f46e5]">
              ↗
            </span>
          </div>


          {/* Certification 2 */}
          <div className="group flex items-center gap-4 rounded-xl border border-[#e2e0db] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#bfdbfe] hover:shadow-sm">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eff6ff] text-xs font-bold text-blue-600 transition-transform duration-300 group-hover:scale-110">
              JS
            </div>

            <div className="min-w-0 flex-1">
              <h4 className="font-semibold">
                JavaScript Essentials
              </h4>

              <p className="mt-1 text-sm text-[#777]">
                Cisco Networking Academy
              </p>
            </div>

            <span className="text-lg text-[#bbb] transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-600">
              ↗
            </span>
          </div>


          {/* Certification 3 */}
          <div className="group flex items-center gap-4 rounded-xl border border-[#e2e0db] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#bbf7d0] hover:shadow-sm">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ecfdf5] text-xs font-bold text-emerald-600 transition-transform duration-300 group-hover:scale-110">
              SQL
            </div>

            <div className="min-w-0 flex-1">
              <h4 className="font-semibold">
                SQL
              </h4>

              <p className="mt-1 text-sm text-[#777]">
                HackerRank
              </p>
            </div>

            <span className="text-lg text-[#bbb] transition-all duration-300 group-hover:translate-x-1 group-hover:text-emerald-600">
              ↗
            </span>
          </div>


          {/* Certification 4 */}
          <div className="group flex items-center gap-4 rounded-xl border border-[#e2e0db] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#fed7aa] hover:shadow-sm">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff7ed] text-xs font-bold text-orange-600 transition-transform duration-300 group-hover:scale-110">
              JA
            </div>

            <div className="min-w-0 flex-1">
              <h4 className="font-semibold">
                Java (Basic)
              </h4>

              <p className="mt-1 text-sm text-[#777]">
                HackerRank
              </p>
            </div>

            <span className="text-lg text-[#bbb] transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange-600">
              ↗
            </span>
          </div>

        </div>


        {/* Bottom */}
        <div className="mt-6 rounded-xl bg-[#18181b] px-5 py-4">

          <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#71717a]">
            Current mindset
          </p>

          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm font-medium text-white">
              Keep learning. Keep building.
            </p>

            <div className="flex gap-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400 [animation-delay:150ms]" />
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 [animation-delay:300ms]" />
            </div>
          </div>

        </div>

      </div>

    </div>
  </div>
</section>

{/* ================= FOOTER ================= */}
<footer className="relative overflow-hidden bg-[#f1f0ec] text-zinc-900">

  {/* Decorative background */}
  <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet-400/15 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

    {/* ================= CTA + CONTACT FORM ================= */}
    <div className="border-b border-black/[0.07] py-16 sm:py-20">

      <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-start">

        {/* LEFT CTA */}
        <div className="lg:pt-4">

          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-black/[0.08] bg-white/60 px-4 py-2 shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

            <span className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-600">
              Open to opportunities
            </span>
          </div>

          <h2 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            Let’s build something
            <span className="text-violet-600"> meaningful.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg">
            I’m a B.Tech CSE graduate focused on frontend development,
            React.js and building clean, useful digital experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "React.js",
              "Next.js",
              "JavaScript",
              "TypeScript",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-black/[0.07] bg-white/70 px-3.5 py-2 text-xs font-medium text-zinc-600 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>


        {/* ================= CONTACT FORM ================= */}
        <div
          id="footer-contact"
          className="rounded-3xl border border-black/[0.07] bg-white/75 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:p-8"
        >

          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-600">
              Get in touch
            </p>

            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900">
              Have something in mind?
            </h3>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Send me a message and I’ll get back to you.
            </p>
          </div>


          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-4"
          >

            {/* Web3Forms Access Key */}
            <input
              type="hidden"
              name="access_key"
              value="1f617924-c753-40c9-9e0f-51c75485edc5"
            />

            {/* Subject shown in your email */}
            <input
              type="hidden"
              name="subject"
              value="New Portfolio Contact — Kirti Rajput"
            />

            {/* Spam protection */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />


            {/* Name */}
            <div>
              <label
                htmlFor="footer-name"
                className="mb-1.5 block text-xs font-medium text-zinc-600"
              >
                Name
              </label>

              <input
                id="footer-name"
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full rounded-xl border border-black/[0.08] bg-[#faf9f7] px-4 py-3 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
              />
            </div>


            {/* Email */}
            <div>
              <label
                htmlFor="footer-email"
                className="mb-1.5 block text-xs font-medium text-zinc-600"
              >
                Email
              </label>

              <input
                id="footer-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-black/[0.08] bg-[#faf9f7] px-4 py-3 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
              />
            </div>


            {/* Message */}
            <div>
              <label
                htmlFor="footer-message"
                className="mb-1.5 block text-xs font-medium text-zinc-600"
              >
                Message
              </label>

              <textarea
                id="footer-message"
                name="message"
                rows={4}
                placeholder="Tell me a little about your message..."
                required
                className="w-full resize-none rounded-xl border border-black/[0.08] bg-[#faf9f7] px-4 py-3 text-sm leading-6 text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
              />
            </div>


            {/* Submit */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-3 rounded-xl bg-zinc-900 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-600 hover:shadow-[0_12px_30px_rgba(124,58,237,0.22)]"
            >
              <span>Send Message</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

          </form>

        </div>

      </div>

    </div>


    {/* ================= MAIN FOOTER INFO ================= */}
    <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.75fr_0.75fr_0.8fr]">

      {/* BRAND */}
      <div>

        <a
          href="#"
          className="group flex w-fit items-center gap-3"
          aria-label="Back to homepage"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900 text-sm font-bold text-white transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
            KR
          </div>

          <div>
            <p className="font-semibold text-zinc-900">
              Kirti Rajput
            </p>

            <p className="text-xs text-zinc-500">
              Frontend Developer
            </p>
          </div>
        </a>

        <p className="mt-6 max-w-sm text-sm leading-6 text-zinc-500">
          Turning ideas into responsive interfaces, interactive experiences
          and practical web applications.
        </p>

        {/* Availability */}
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-black/[0.07] bg-white/70 px-3 py-2 shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

          <span className="text-xs text-zinc-500">
            Available for opportunities
          </span>
        </div>

      </div>


      {/* NAVIGATION */}
      <div>

        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
          Explore
        </p>

        <div className="mt-5 space-y-3">

          {[
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Projects", "#projects"],
            ["Experience", "#experience"],
            ["Education", "#education"],
            ["Contact", "#footer-contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="group flex w-fit items-center gap-2 text-sm text-zinc-500 transition-colors duration-200 hover:text-violet-600"
            >
              <span>{label}</span>

              <span className="translate-x-[-4px] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                →
              </span>
            </a>
          ))}

        </div>

      </div>


      {/* FOCUS */}
      <div>

        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
          Focus
        </p>

        <div className="mt-5 flex flex-wrap gap-2">

          {[
            "React.js",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Node.js",
            "MongoDB",
          ].map((skill) => (
            <span
              key={skill}
              className="cursor-default rounded-full border border-black/[0.07] bg-white/70 px-3 py-1.5 text-xs text-zinc-500 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-violet-50 hover:text-violet-600"
            >
              {skill}
            </span>
          ))}

        </div>

      </div>


      {/* CONNECT */}
      <div>

        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
          Connect
        </p>

        <div className="mt-5 space-y-3">

          {/* GitHub */}
          <a
            href="https://github.com/kirtirajput123"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between border-b border-black/[0.07] pb-3 text-sm text-zinc-500 transition-colors duration-200 hover:text-violet-600"
          >
            <span>GitHub</span>

            <span className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>


          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/kirti-rajput-2b419627/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between border-b border-black/[0.07] pb-3 text-sm text-zinc-500 transition-colors duration-200 hover:text-violet-600"
          >
            <span>LinkedIn</span>

            <span className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>


          {/* Email */}
          <a
            href="mailto:kirti.0112cs221071@gmail.com"
            className="group flex items-center justify-between border-b border-black/[0.07] pb-3 text-sm text-zinc-500 transition-colors duration-200 hover:text-violet-600"
          >
            <span>Email</span>

            <span className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>

        </div>

      </div>

    </div>


    {/* ================= BOTTOM BAR ================= */}
    <div className="flex flex-col gap-5 border-t border-black/[0.07] py-7 sm:flex-row sm:items-center sm:justify-between">

      <p className="text-xs text-zinc-500">
        © 2026 Kirti Rajput. All rights reserved.
      </p>

      <div className="flex flex-wrap items-center gap-5">

        <span className="text-xs text-zinc-500">
          B.Tech CSE · 8.71 CGPA
        </span>

        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="group flex items-center gap-2 text-xs font-medium text-zinc-500 transition-colors hover:text-violet-600"
        >
          Back to top

          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.08] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-violet-400/50 group-hover:text-violet-600">
            ↑
          </span>
        </button>

      </div>

    </div>

  </div>
</footer>

    </main>
  );
}