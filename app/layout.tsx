import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Community Landing',
  description: 'Welcome to our AI community',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-gray-100">
        {children}
      </body>
    </html>
  );
} 