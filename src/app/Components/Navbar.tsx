'use client';

import { useEffect, useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { label: 'Menus', href: '#Menu' },
  { label: 'À propos', href: '#About' },
  { label: 'Adresse', href: '#Adress' },
  { label: 'Contact', href: '#Contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`comfortaa fixed left-0 top-0 z-50 w-full transition duration-500 ${
        isScrolled
          ? 'bg-black/75 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/Logo-sushi.png"
            alt="Logo SU SUSHI"
            className="h-12 w-auto transition duration-500 group-hover:scale-110"
          />
          <span className="hidden text-lg font-bold tracking-widest text-white sm:block">
            SU <span className="text-red-500">SUSHI</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 backdrop-blur-md lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-xs font-bold uppercase tracking-[0.25em] text-white/75 transition hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA desktop */}
        <a
          href="#Contact"
          className="hidden rounded-full bg-red-600 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-[0_0_25px_rgba(220,38,38,0.4)] transition hover:scale-105 hover:bg-red-700 lg:inline-flex"
        >
          Réserver
        </a>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition hover:bg-red-600 lg:hidden"
        >
          <span className="sr-only">Ouvrir le menu</span>
          <Bars3Icon className="size-6" />
        </button>
      </nav>

      {/* Mobile menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />

        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto border-l border-white/10 bg-black/90 px-6 py-6 text-white shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-3">
              <img
                alt="Logo SU SUSHI"
                src="/Logo-sushi.png"
                className="h-12 w-auto"
              />
              <span className="font-bold tracking-widest">
                SU <span className="text-red-500">SUSHI</span>
              </span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-red-600"
            >
              <span className="sr-only">Fermer le menu</span>
              <XMarkIcon className="size-6" />
            </button>
          </div>

          <div className="mt-10 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-sm font-bold uppercase tracking-[0.25em] text-white/80 transition hover:border-red-500/50 hover:bg-red-500/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#Contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-8 flex justify-center rounded-full bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_0_30px_rgba(220,38,38,0.45)] transition hover:bg-red-700"
          >
            Réserver
          </a>
        </DialogPanel>
      </Dialog>
    </header>
  );
}