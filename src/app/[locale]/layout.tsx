import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Navigation, Footer } from '../../components/server';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Webalize',
  description: 'Profesjonalne rozwiązania dla Twojego biznesu',
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation currentLocale={locale} />
        <main style={{ minHeight: 'calc(100vh - 200px)', padding: '2rem 0' }}>
          {children}
        </main>
        <Footer currentLocale={locale} />
      </body>
    </html>
  );
}
