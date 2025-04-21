import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-transparent border-t border-white/10 py-10 text-white/80">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl font-bold text-primary">
              AI Community
            </Link>
            <p className="mt-2 max-w-md">
              Сообщество, где автоматизация превращается в прибыль. Готовые решения и AI-агенты для вашего бизнеса.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm">
            <Link href="#learn-more" className="hover:text-primary transition-colors">
              Возможности
            </Link>
            <Link href="#benefits" className="hover:text-primary transition-colors">
              Преимущества
            </Link>
            <Link href="#solutions" className="hover:text-primary transition-colors">
              Решения
            </Link>
            <Link href="#founders" className="hover:text-primary transition-colors">
              Эксперты
            </Link>
            <a href="https://t.me/oplataaifors_bot" className="hover:text-primary transition-colors">
              Подписаться
            </a>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>© 2025 AI Community. Все права защищены.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">
              Условия
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Конфиденциальность
            </Link>
            <a href="https://t.me/oplataaifors_bot" className="hover:text-primary transition-colors">
              Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 