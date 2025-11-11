import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Free Resources', href: '#resources' },
    { label: 'Courses', href: '#courses' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Community', href: '#community' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/70 backdrop-blur-md border-b border-neutral-200/60">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 shadow-sm" />
            <span className="font-semibold tracking-tight text-neutral-900 group-hover:text-neutral-800 transition-colors">Creator Studio</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#community" className="inline-flex items-center text-sm font-medium bg-neutral-900 text-white px-4 py-2 rounded-md hover:bg-neutral-800 transition-colors">
              Join My Circle
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-neutral-100">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-2 py-2 rounded-md text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100">
                {item.label}
              </a>
            ))}
            <a href="#community" onClick={() => setOpen(false)} className="block text-center px-3 py-2 rounded-md bg-neutral-900 text-white hover:bg-neutral-800">
              Join My Circle
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
