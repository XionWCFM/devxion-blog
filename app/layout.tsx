import '@/styles/animation.css';
import '@/styles/globals.css';

import { Footer, Header, MoveTop, Providers } from '@/components';

import ScrollProgressBar from '@/components/helper-components/ScrollProgressBar';
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body className="dark:bg-gradient-to-br dark:from-black dark:to-gray-800  bg-white overflow-x-hidden min-h-screen">
        <Providers>
          <ScrollProgressBar />

          <div className="wrapper">
            <Header />
            <div className="text-gray-700 transition-colors duration-300 dark:text-gray-200 ">
              <div className="  px-12 py-10 max-w-[1024px] mx-auto">
                {children}
              </div>
            </div>
          </div>
          <MoveTop />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
