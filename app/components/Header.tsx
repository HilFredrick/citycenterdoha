"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const NAV_ITEMS = [
  { label: "HOME", href: "/", active: true },
  { label: "SHOPS", href: "https://citycenterdoha.com/shops/" },
  { label: "DINING", href: "https://citycenterdoha.com/dining/" },
  { label: "ENTERTAINMENT", href: "https://citycenterdoha.com/entertainment/" },
  { label: "SERVICES", href: "https://citycenterdoha.com/services/" },
  { label: "STAY WITH US", href: "https://citycenterdoha.com/stay-with-us/" },
  { label: "ABOUT US", href: "https://citycenterdoha.com/about-us/" },
  { label: "CONTACT US", href: "https://citycenterdoha.com/contact-us/" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const saved = window.localStorage.getItem("ccd-theme");
    if (saved === "light" || saved === "dark") {
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const toggleTheme = () => {
    const attr = document.documentElement.getAttribute("data-theme");
    const isCurrentlyDark =
      attr === "dark" ||
      (!attr && window.matchMedia("(prefers-color-scheme: dark)").matches);
    const next = isCurrentlyDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem("ccd-theme", next);
  };

  return (
    <header
      id="masthead"
      className={`sticky top-0 z-50 w-full bg-page transition-colors duration-200 ${
        scrolled ? "border-b border-border-subtle" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-2.5 lg:px-8">
        {/* Site Logo (44px+ target) */}
        <Link
          href="/"
          className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center"
          aria-label="City Center Doha Home"
        >
          <Image
            src="/images/logo.webp"
            alt="City Center Doha"
            width={220}
            height={72}
            priority
            className="logo-light h-auto w-[160px] sm:w-[190px] lg:w-[220px]"
          />
          <Image
            src="/images/logo-white.webp"
            alt="City Center Doha"
            width={220}
            height={72}
            priority
            className="logo-dark h-auto w-[160px] sm:w-[190px] lg:w-[220px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden items-center lg:flex"
        >
          <ul className="flex items-center">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`inline-flex min-h-[44px] min-w-[44px] items-center px-[13px] py-2.5 text-[16px] font-semibold tracking-wide transition-colors xl:text-[17px] ${
                    item.active
                      ? "text-brand"
                      : "text-foreground hover:text-brand"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Controls: Language Switcher + Dark Mode Toggle + Mobile Hamburger */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div ref={langRef} className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((prev) => !prev)}
              aria-expanded={langOpen}
              aria-haspopup="true"
              aria-label="Select Language"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-1.5 rounded-md bg-page px-3 text-[16px] font-semibold text-foreground transition-colors hover:bg-surface lg:text-[17px]"
            >
              <span>EN</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 320 512"
                className="h-3.5 w-3.5 fill-current"
              >
                <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
              </svg>
            </button>

            {langOpen && (
              <ul className="overlay-elevation absolute right-0 mt-1 min-w-[64px] rounded-md border border-border-subtle bg-elevated">
                <li>
                  <a
                    href="https://citycenterdoha.com/ar/home-ar/"
                    lang="ar"
                    hrefLang="ar"
                    className="flex min-h-[44px] min-w-[44px] items-center justify-center px-3 text-[16px] font-semibold text-foreground transition-colors hover:bg-surface"
                  >
                    AR
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Theme Toggle (44x44px) */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-foreground transition-colors hover:bg-surface hover:text-brand"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="logo-dark h-5 w-5"
            >
              <circle cx="12" cy="12" r="4" />
              <path
                strokeLinecap="round"
                d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
              />
            </svg>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="logo-light h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
              />
            </svg>
          </button>

          {/* Mobile Menu Toggle (44x44px) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Menu Toggle"
            aria-expanded={mobileMenuOpen}
            className="inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-foreground transition-colors hover:bg-surface hover:text-brand lg:hidden"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 448 512"
              className="h-6 w-6 fill-current"
            >
              <path d="M432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Flyout Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-footer/60"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="overlay-elevation fixed inset-y-0 left-0 z-10 flex w-[300px] max-w-[85vw] flex-col bg-elevated p-6">
            <div className="mb-3 flex justify-end">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Menu"
                className="inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-foreground transition-colors hover:bg-surface hover:text-brand"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 512 512"
                  className="h-6 w-6 fill-current"
                >
                  <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340zM356.5 194.6L295.1 256l61.4 61.4c4.6 4.6 4.6 12.1 0 16.8l-22.3 22.3c-4.6 4.6-12.1 4.6-16.8 0L256 295.1l-61.4 61.4c-4.6 4.6-12.1 4.6-16.8 0l-22.3-22.3c-4.6-4.6-4.6-12.1 0-16.8l61.4-61.4-61.4-61.4c-4.6-4.6-4.6-12.1 0-16.8l22.3-22.3c4.6-4.6 12.1-4.6 16.8 0l61.4 61.4 61.4-61.4c4.6-4.6 12.1-4.6 16.8 0l22.3 22.3c4.7 4.6 4.7 12.1 0 16.8z" />
                </svg>
              </button>
            </div>
            <nav aria-label="Mobile Navigation">
              <ul className="divide-y divide-border-subtle">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex min-h-[48px] items-center px-4 py-3 text-[17px] font-semibold transition-colors ${
                        item.active
                          ? "text-brand"
                          : "text-foreground hover:text-brand"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
