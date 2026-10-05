import { Fraunces, Instrument_Sans } from 'next/font/google';
import { site } from '@/content/site';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['SOFT', 'WONK', 'opsz'],
  variable: '--font-fraunces',
});

const instrument = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument',
});

export const metadata = {
  title: `${site.name}, paintings`,
  description: site.statement,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${instrument.variable}`}>
      <body>{children}</body>
    </html>
  );
}
