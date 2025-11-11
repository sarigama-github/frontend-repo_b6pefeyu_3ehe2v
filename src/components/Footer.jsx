export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-neutral-600">© {new Date().getFullYear()} Your Name. All rights reserved.</div>
          <div className="flex items-center gap-5 text-neutral-700">
            <a href="mailto:hello@yourname.com" className="hover:text-neutral-900">hello@yourname.com</a>
            <span className="hidden sm:inline">•</span>
            <a href="#" className="hover:text-neutral-900">Twitter</a>
            <a href="#" className="hover:text-neutral-900">Instagram</a>
            <a href="#" className="hover:text-neutral-900">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
