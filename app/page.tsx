const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#" className="text-lg font-semibold text-emerald-400">
            Mykhailo
          </a>
          <nav>
            <ul className="flex items-center gap-6 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-zinc-400 transition-colors hover:text-emerald-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12 w-full">
        <section id="about">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Hi, I&apos;m <span className="text-emerald-400">Mykhailo</span>.
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-400">
            A developer building clean, thoughtful web experiences.
          </p>
        </section>
      </main>

      <footer className="border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-zinc-500">
          © {new Date().getFullYear()} Mykhailo. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
