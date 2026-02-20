"use client";

import { useEffect, useState, useCallback } from "react";

const navItems = [
  { id: "setup", label: "Setup", num: "01" },
  { id: "intro", label: "Claude", num: "02" },
  { id: "comparison", label: "Comparison", num: "03" },
  { id: "prompts", label: "Prompts", num: "04" },
  { id: "advanced", label: "Advanced", num: "05" },
  { id: "cases", label: "Cases", num: "06" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState<string>("");

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  useEffect(() => {
    const sectionEls = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (sectionEls.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          // Pick the entry with the highest intersection ratio
          const most = visible.reduce((prev, curr) =>
            curr.intersectionRatio > prev.intersectionRatio ? curr : prev
          );
          setActiveSection(most.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sectionEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-4 pointer-events-none animate-nav-enter"
    >
      <div
        className="pointer-events-auto flex items-center gap-1 rounded-full px-6 py-3"
        style={{
          background: "rgba(25, 25, 25, 0.85)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(203, 154, 118, 0.15)",
        }}
      >
        {/* Brand */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="mr-4 select-none flex items-center"
        >
          <svg width="90" height="19" viewBox="0 0 145 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.8274 0.43595C27.8578 -0.754951 30.4743 0.634504 30.4743 2.90358V26.0956C30.4743 27.6967 29.1099 28.9946 27.4269 28.9946C25.7438 28.9946 24.3794 27.6967 24.3794 26.0956V7.69853L24.267 7.74718C21.4085 8.91419 18.6413 9.55563 15.9648 9.65444L15.2371 9.66792C12.3353 9.66792 9.32565 9.02028 6.20726 7.74718L6.09486 7.69853V26.0956C6.09486 27.6025 4.88627 28.8408 3.34092 28.9813L3.04743 28.9946C1.36438 28.9946 0 27.6967 0 26.0956L0 2.90358C0 0.634504 2.6165 -0.754951 4.64684 0.43595C8.59235 2.75021 12.1235 3.86992 15.2371 3.86992C18.3508 3.86992 21.8819 2.75021 25.8274 0.43595Z" fill="#CA9A76"/>
            <path d="M45.7101 3.87549C53.0033 3.87549 58.9161 9.5 58.9161 16.438C58.9159 23.3758 53.0031 28.9995 45.7101 28.9995C38.4172 28.9993 32.5052 23.3757 32.505 16.438C32.505 9.50014 38.417 3.87571 45.7101 3.87549ZM45.714 9.67041C41.7868 9.67041 38.6026 12.6992 38.6026 16.4351C38.6029 20.1707 41.787 23.1987 45.714 23.1987C49.6408 23.1986 52.8241 20.1706 52.8243 16.4351C52.8243 12.6993 49.6409 9.67055 45.714 9.67041Z" fill="#CA9A76"/>
            <path d="M121.047 4.00024C122.73 4.00024 124.095 5.29817 124.095 6.89924V19.2277L139.209 4.84934C140.324 3.78797 142.09 3.72163 143.287 4.65033L143.518 4.84934C144.709 5.98147 144.709 7.81702 143.518 8.94915L123.202 28.2758C121.283 30.1021 118 28.8086 118 26.2259V6.89924C118 5.29817 119.364 4.00024 121.047 4.00024Z" fill="#CA9A76"/>
            <path d="M102.594 3.87549C109.887 3.87549 115.8 9.5 115.8 16.438C115.799 23.3758 109.887 28.9995 102.594 28.9995C95.3007 28.9993 89.3887 23.3756 89.3885 16.438C89.3885 9.50016 95.3006 3.87573 102.594 3.87549ZM102.597 9.67041C98.6704 9.67041 95.4861 12.6992 95.4861 16.4351C95.4864 20.1707 98.6705 23.1987 102.597 23.1987C106.524 23.1986 109.708 20.1706 109.708 16.4351C109.708 12.6993 106.524 9.67051 102.597 9.67041Z" fill="#CA9A76"/>
            <path d="M74.1552 3.87549C81.4482 3.87573 87.3603 9.50015 87.3603 16.438C87.3601 23.3757 81.4481 28.9993 74.1552 28.9995C66.8621 28.9995 60.9494 23.3758 60.9492 16.438C60.9492 9.5 66.862 3.87549 74.1552 3.87549ZM74.1513 9.67041C70.2242 9.67041 67.041 12.6992 67.041 16.4351C67.0412 20.1707 70.2243 23.1987 74.1513 23.1987C78.0782 23.1987 81.2614 20.1707 81.2617 16.4351C81.2617 12.6993 78.0784 9.67048 74.1513 9.67041Z" fill="#CA9A76"/>
            <ellipse cx="15.2368" cy="19.3333" rx="3.04743" ry="2.899" fill="#CA9A76"/>
            <path d="M15.2402 15.4648C17.4842 15.4649 19.3036 17.1953 19.3036 19.3301C19.3036 21.4648 17.4842 23.1953 15.2402 23.1953C12.9961 23.1953 11.1767 21.4648 11.1767 19.3301C11.1767 17.1953 12.9961 15.4648 15.2402 15.4648ZM15.2392 17.3965C14.1173 17.3965 13.2071 18.2619 13.207 19.3291C13.207 20.3965 14.1172 21.2617 15.2392 21.2617C16.3611 21.2615 17.2704 20.3964 17.2704 19.3291C17.2703 18.262 16.361 17.3967 15.2392 17.3965Z" fill="#CA9A76"/>
          </svg>
        </a>

        {/* Separator */}
        <div
          className="hidden md:block w-px h-4 mr-3"
          style={{ background: "rgba(203, 154, 118, 0.2)" }}
        />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className="relative px-3 py-1.5 text-xs tracking-wide transition-colors duration-300"
                style={{
                  color: isActive
                    ? "#CB9A76"
                    : "rgba(244, 243, 238, 0.5)",
                }}
              >
                <span className="opacity-50 mr-1">{item.num}</span>
                {item.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-3 right-3 h-px animate-nav-underline"
                    style={{ background: "#CB9A76" }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile dots */}
        <div className="flex md:hidden items-center gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className="flex items-center justify-center w-6 h-6 text-[10px] rounded-full transition-all duration-300"
                style={{
                  color: isActive
                    ? "#CB9A76"
                    : "rgba(244, 243, 238, 0.5)",
                  background: isActive
                    ? "rgba(203, 154, 118, 0.12)"
                    : "transparent",
                }}
                aria-label={item.label}
              >
                {item.num}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
