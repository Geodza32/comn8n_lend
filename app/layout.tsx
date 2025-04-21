import React from "react";
import type { ReactNode } from "react";
import { Header } from "../1/2/app/_components/layout/header";
import { Footer } from "../1/2/app/_components/layout/footer";
import "../1/2/app/globals.css";

export const metadata = {
  title: 'AI Community',
  description: 'Сообщество, где автоматизация превращается в прибыль',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="flex min-h-screen flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
} 