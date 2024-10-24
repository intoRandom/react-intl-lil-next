import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';

import { LangProvider } from 'react-intl-lil';
import { langConfig } from '@/lang/config';
import Navigation from '@/components/navigation';

const nunito = Nunito({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'react-intl-lil',
  description: 'The Easiest Static Internationalization for React and Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={langConfig.defaultLang}>
      <body className={`${nunito.className} antialiased`}>
        <LangProvider langConfig={langConfig}>
          <Navigation />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
