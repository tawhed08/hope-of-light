
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Heart, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Impact", href: "/impact" },
  { label: "Stories", href: "/stories" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#555B46]/10 bg-[#FAF6F3]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-3"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#555B46] text-[#FAF6F3]">
            <Heart size={22} strokeWidth={1.7} />
          </span>

          <span className="flex flex-col">
            <span className="text-lg font-semibold leading-tight tracking-tight text-[#33372D]">
              Hope of Light
            </span>
            <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.24em] text-[#777968]">
              Every Life Matters
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-7">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 text-[13px] font-medium transition-colors ${
                  isActive
                    ? "text-[#BF4C21]"
                    : "text-[#555B46] hover:text-[#BF4C21]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-[#BF4C21]" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/volunteer"
            className="px-3 py-3 text-sm font-semibold text-[#555B46] transition-colors hover:text-[#BF4C21]"
          >
            Volunteer
          </Link>

          <Link
            href="/donate"
            className="inline-flex items-center gap-2 rounded-full bg-[#BF4C21] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#a63d19]"
          >
            Donate Now
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#555B46]/15 text-[#555B46] lg:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-[#555B46]/10 bg-[#FAF6F3] px-5 pb-6 pt-3 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`border-b border-[#555B46]/10 py-3.5 text-sm font-medium ${
                    isActive ? "text-[#BF4C21]" : "text-[#555B46]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="mt-5 grid grid-cols-2 gap-3">
              <Link
                href="/volunteer"
                onClick={closeMenu}
                className="rounded-full border border-[#555B46]/20 px-4 py-3 text-center text-sm font-semibold text-[#555B46]"
              >
                Volunteer
              </Link>

              <Link
                href="/donate"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-full bg-[#BF4C21] px-4 py-3 text-sm font-semibold text-white"
              >
                Donate Now
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
