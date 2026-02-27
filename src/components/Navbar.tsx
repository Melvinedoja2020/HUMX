interface NavbarProps {
  onBookNow?: () => void;
}

const links = [
  { label: "Home", href: "#top" },
  { label: "Rooms", href: "#rooms" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#footer" },
];

export default function Navbar({ onBookNow }: NavbarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-[#111111]/55 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="text-sm font-semibold tracking-[0.22em] text-[#f5f0e8]">
          LODR
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#f5f0e8]/85 transition-colors hover:text-[#f5f0e8]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={onBookNow}
          className="rounded-full bg-[#f5f0e8] px-5 py-2.5 text-sm font-semibold text-[#161616] shadow-[0_10px_24px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-0.5"
        >
          Book now
        </button>
      </div>
    </header>
  );
}
