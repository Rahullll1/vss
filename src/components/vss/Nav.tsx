export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="flex items-center justify-between px-8 md:px-14 py-6">
        <a href="#top" className="flex items-center gap-3 text-beige">
          <span className="block h-2 w-2 rounded-full bg-champagne shadow-[0_0_12px_2px_oklch(0.82_0.035_75_/_0.6)]" />
          <span className="text-[0.7rem] tracking-[0.32em] uppercase font-medium">Vision / VSS</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-[0.68rem] tracking-[0.3em] uppercase text-beige/80">
          <a href="#systems" className="hover:text-champagne transition-colors duration-500">Systems</a>
          <a href="#command" className="hover:text-champagne transition-colors duration-500">Command</a>
          <a href="#projects" className="hover:text-champagne transition-colors duration-500">Projects</a>
          <a href="#contact" className="hover:text-champagne transition-colors duration-500">Contact</a>
        </nav>
        <div className="hidden md:block text-[0.68rem] tracking-[0.3em] uppercase text-beige/60">
          24 / 7  ·  Online
        </div>
      </div>
    </header>
  );
}
