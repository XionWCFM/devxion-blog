import '@/styles/animation.css';
import '@/styles/globals.css';
import '@/styles/style.css';

import { MoveTop, Providers } from '@/components';
import { Noto_Sans_KR } from 'next/font/google';

import ScrollProgressBar from '@/components/helper-components/ScrollProgressBar';
import PortfolioHeader from '@/components/ui-components/PortfolioHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'dev XionWCFM blog',
  description: 'developer yugiljong',
  metadataBase: new URL('https://devxion-blog.vercel.app'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  icons: {
    icon: '/favicon.ico',
  },
  verification: {
    google: '9NnnQfV-i-vmJVWpSMD99dmCxRKDwljQMqr5CQGUmN8',
  },
};

const notosanskr = Noto_Sans_KR({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr" className={notosanskr.className}>
      <body>
        <Providers>
          <ScrollProgressBar />
          <div className="">
            <PortfolioHeader />
            {children}
          </div>
          <MoveTop />
        </Providers>
      </body>
    </html>
  );
}
