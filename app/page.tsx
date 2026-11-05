const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
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
  },
  {
    role: "Python Developer",
    title: "Telegram Workflow Bot",
    description:
      "An aiogram-based bot that automates order intake, approvals, and notifications for a small operations team.",
    tags: ["Python", "aiogram", "Redis"],
  },
  {
    role: "Full-Stack Developer",
    title: "Data Insight Portal",
    description:
      "A scraping and analytics portal that turns raw web data into searchable reports and clear visualizations.",
    tags: ["React", "pandas", "SQL"],
  },
];

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.34-.012 2.42-.012 2.749 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.554V9h3.565v11.452Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="relative isolate min-h-screen flex flex-col justify-between overflow-hidden bg-zinc-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(255,255,255,0))] text-zinc-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-emerald-500/10 blur-[120px]"
      />
      <header className="sticky top-4 z-50 max-w-5xl mx-auto px-4 w-full">
        <div className="relative max-w-5xl mx-auto px-4 py-4 flex items-center justify-center">
          <a
            href="#"
            className="absolute left-4 text-lg font-semibold text-emerald-400"
          >
            Mykhailo
          </a>
          <nav className="flex items-center gap-6 rounded-full border border-zinc-800/80 bg-zinc-900/80 px-5 py-2 shadow-lg backdrop-blur-md">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-300 transition-colors hover:text-zinc-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="rounded-full bg-emerald-500 px-4 py-1.5 font-medium text-zinc-950 shadow-md shadow-emerald-500/10 transition-all hover:bg-emerald-400"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12 w-full">
        <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-12">
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-4 backdrop-blur-sm">
              <div className="h-64 rounded-xl bg-zinc-800" />
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

          <div className="lg:col-span-7">
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
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 font-medium text-zinc-950 transition-colors hover:bg-emerald-600"
              >
                Explore Work
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-800/80 px-4 py-2.5 text-sm text-zinc-300 transition-colors hover:border-zinc-700 hover:text-emerald-400"
              >
                <GitHubIcon />
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-800/80 px-4 py-2.5 text-sm text-zinc-300 transition-colors hover:border-zinc-700 hover:text-emerald-400"
              >
                <LinkedInIcon />
                LinkedIn
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
                <div className="aspect-video bg-zinc-800/60 rounded-xl mb-4 relative" />
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

      <footer className="border-t border-zinc-800/80">
        <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-zinc-500">
          © {new Date().getFullYear()} Mykhailo. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
