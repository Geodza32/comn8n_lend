import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-xl text-primary">AI Community</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#learn-more" className="text-sm font-medium text-white hover:text-primary transition-colors">
            Возможности
          </Link>
          <Link href="#benefits" className="text-sm font-medium text-white hover:text-primary transition-colors">
            Преимущества
          </Link>
          <Link href="#solutions" className="text-sm font-medium text-white hover:text-primary transition-colors">
            Решения
          </Link>
          <Link href="#founders" className="text-sm font-medium text-white hover:text-primary transition-colors">
            Эксперты
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <a 
            href="https://t.me/oplataaifors_bot" 
            className="hidden md:inline-flex h-9 items-center justify-center rounded-md gradient-button px-4 py-2 text-sm font-medium text-white shadow transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            Подписаться за 5000 ₽
          </a>
          <button className="md:hidden inline-flex items-center justify-center p-1 rounded-md text-white hover:text-primary hover:bg-gray-800/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
} 