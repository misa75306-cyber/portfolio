"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const highlights = [
  {
    title: "Python & Automation",
    description:
      "Building reliable bots, background workflows, and backend logic with Python, aiogram, and Asyncio.",
    tags: ["Python", "aiogram", "Asyncio"],
  },
  {
    title: "Full-Stack Development",
    description:
      "Shipping responsive web interfaces and connecting them to robust Python backends with modern full-stack technologies.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "Fast API & Web Services",
    description:
      "Designing typed, documented services and the REST APIs and SQL layers behind them.",
    tags: ["FastAPI", "REST APIs", "SQL"],
  },
];

const projects = [
  {
    role: "Full-Stack Developer",
    title: "Automation Dashboard",
    description:
      "A real-time dashboard for scheduling and monitoring Python automation jobs, with typed APIs and a responsive UI.",
    tags: ["Next.js", "FastAPI", "PostgreSQL"],
    image: "/tg_baner.png",
    imageAlt: "Automation Dashboard banner",
  },
  {
    role: "Python Developer",
    title: "Telegram Workflow Bot",
    description:
      "An aiogram-based bot that automates order intake, approvals, and notifications for a small operations team.",
    tags: ["Python", "aiogram", "Redis"],
    image: "/PyFlow.png",
    imageAlt: "Telegram Workflow Bot process diagram",
  },
  {
    role: "Full-Stack Developer",
    title: "Data Insight Portal",
    description:
      "A scraping and analytics portal that turns raw web data into searchable reports and clear visualizations.",
    tags: ["React", "pandas", "SQL"],
    image: "/Data_Insight_Portal.png",
    imageAlt: "Data Insight Portal interface",
  },
];

function TelegramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative isolate min-h-screen flex flex-col justify-between overflow-hidden bg-zinc-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(255,255,255,0))] text-zinc-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-emerald-500/10 blur-[120px]"
      />
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4">
        <div className="relative max-w-6xl mx-auto px-4 py-4 flex items-center justify-center">
          <nav className="flex items-center gap-6 rounded-full border border-zinc-800/80 bg-zinc-900/80 px-5 py-2 shadow-lg backdrop-blur-md">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`inline-block text-sm transition-all duration-200 ${
                        isActive
                          ? "scale-105 text-white font-semibold drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]"
                          : "text-white hover:opacity-70"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <a
              href="#contact"
              className="ml-4 rounded-full bg-emerald-500 px-4 py-1.5 font-medium text-white shadow-md shadow-emerald-500/10 transition-all hover:bg-emerald-400"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-28 pb-12 w-full">
        <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-12">
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-4 backdrop-blur-sm">
              <div className="relative h-[440px] overflow-hidden rounded-xl bg-zinc-800">
                <Image
                  src="/foto_for_projekt_portfolio.jpg"
                  alt="Mykhailo Steshyn"
                  fill
                  className="object-cover object-top rounded-xl"
                />
              </div>
              <div className="mt-4 flex items-center justify-between px-1 pb-1">
                <div>
                  <p className="font-medium">Mykhailo Steshyn</p>
                  <p className="text-sm text-zinc-300">
                    Python &amp; Full-Stack Developer
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Available for projects
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              Python &amp; Full-Stack Developer
            </span>
            <h1 className="mt-6 font-extrabold tracking-tight text-4xl sm:text-5xl text-white">
              Mykhailo Steshyn
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-300">
              I build Python automations, clean APIs, and modern full-stack web
              applications — pairing robust backends with responsive interfaces
              to turn repetitive work into dependable systems and raw data into
              something useful.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 font-medium text-white transition-colors hover:bg-emerald-600"
              >
                Explore Work
              </a>
              <a
                href="https://t.me/mix_top3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-800/80 px-4 py-2.5 text-sm text-zinc-300 transition-colors hover:border-zinc-700 hover:text-emerald-400"
              >
                <TelegramIcon />
                Telegram
              </a>
              <a
                href="mailto:misa75306@gmail.com"
                aria-label="Email"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-800/80 px-4 py-2.5 text-sm text-zinc-300 transition-colors hover:border-zinc-700 hover:text-emerald-400"
              >
                <MailIcon />
                Email
              </a>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-5 transition hover:border-zinc-700"
            >
              <h2 className="font-semibold text-zinc-100">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {item.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-zinc-800/80 bg-zinc-950/60 px-2 py-1 text-xs text-zinc-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section id="projects" className="py-12">
          <div className="mb-6">
            <p className="text-xs font-medium uppercase tracking-wide text-emerald-400">
              Selected Work
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Projects
            </h2>
            <p className="mt-2 text-sm text-zinc-300">
              A few projects that show how I combine Python backends with modern
              full-stack web experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-5 transition-all hover:border-zinc-700"
              >
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="aspect-video w-full rounded-xl mb-4 object-cover"
                />
                <p className="text-xs font-medium uppercase tracking-wide text-emerald-400">
                  {project.role}
                </p>
                <h3 className="mt-1 font-semibold text-zinc-100">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-zinc-800/80 bg-zinc-950/60 px-2 py-1 text-xs text-zinc-300"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
