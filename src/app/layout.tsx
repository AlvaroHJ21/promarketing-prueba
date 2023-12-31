import './globals.css';
import type { Metadata } from 'next';
import { Inter, Roboto_Condensed } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const condensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={condensed.className}>{children}</body>
    </html>
  );
}
