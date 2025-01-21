import { Header } from 'app/components/shared/Header';
import { Roboto } from 'next/font/google';
import { Footer } from 'app/components/shared/Footer';
import 'app/sass/globals.sass';

const robotoFont = Roboto({
  weight: ['100', '300', '500', '700'],
  subsets: ['latin']
});

interface LayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang='en'>
      <body className={robotoFont.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
