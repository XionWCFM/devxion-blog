import { Header, Providers } from '@/components';
import '@/styles/globals.css';

export const metadata = {
  title: 'dev XionWCFM blog',
  description: 'check my bio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-gray-700 transition-colors duration-300 dark:text-gray-200 dark:bg-gradient-to-br dark:from-black dark:to-gray-800  bg-white px-12 py-10 overflow-x-hidden min-h-screen">
        {' '}
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
