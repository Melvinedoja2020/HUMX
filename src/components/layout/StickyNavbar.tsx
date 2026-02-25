import { Link, NavLink, useLocation } from "react-router-dom";

const navItems = [
  { label: "About", to: "/" },
  { label: "Rooms", to: "/rooms" },
  { label: "Stay", to: "/" },
  { label: "Services", to: "/" },
  { label: "All pages", to: "/" },
];

const darkRoutes = new Set(["/"]);

export function StickyNavbar() {
  const location = useLocation();
  const isDark = darkRoutes.has(location.pathname);

  const wrapperClass = isDark
    ? "bg-black/32 text-white border-white/10"
    : "bg-white/92 text-[#0f0f0f] border-black/10";

  const centerPillClass = isDark
    ? "bg-white/18 border border-white/10 text-white"
    : "bg-[#f2f2f2] border border-[#dfdfdf] text-[#222]";

  const ctaClass = isDark
    ? "bg-white text-black hover:bg-white/90"
    : "bg-black text-white hover:bg-black/90";

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-xl ${wrapperClass}`}>
      <div className="mx-auto flex h-[74px] w-full max-w-[1140px] items-center justify-between px-5 md:px-8">
        <Link to="/" className="inline-flex min-w-[90px] items-center gap-1.5 md:min-w-[122px]">
          <span aria-hidden="true" className="text-[22px] md:text-[34px]">
            ✺
          </span>
          <span className="flex flex-col leading-[0.85]">
            <span className="text-[16px] font-semibold tracking-[-0.02em] md:text-[35px]">Lodr</span>
            <span className="text-[16px] font-semibold tracking-[-0.02em] md:text-[35px]">Hotel</span>
          </span>
        </Link>

        <nav className={`hidden h-[46px] items-center rounded-full px-6 lg:flex ${centerPillClass}`}>
          {navItems.map((item, index) => (
            <NavLink
              key={item.label}
              to={item.to}
              className="px-4 text-[14px] font-medium tracking-[-0.01em] opacity-90 transition-opacity hover:opacity-100 md:text-[27px]"
            >
              {item.label}
              {index === 0 || index === 4 ? (
                <span className="ml-1 inline-block text-[10px] md:text-[17px]">⌄</span>
              ) : null}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className={`h-[40px] min-w-[112px] rounded-full px-5 text-[13px] font-semibold tracking-[-0.01em] transition-colors md:h-[46px] md:min-w-[140px] md:px-7 md:text-[26px] ${ctaClass}`}
        >
          Book your stay
        </button>
      </div>
    </header>
  );
}
