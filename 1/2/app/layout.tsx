import React from "react";
import type { ReactNode } from "react";
import { Header } from "./_components/layout/header";
import { Footer } from "./_components/layout/footer";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="flex min-h-screen flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1 container mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
} 