import { MainProducts } from 'app/components/home/MainProducts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '🌟 Future World',
  description: 'Welcome to the future world, an ecomerce from other century',
  applicationName: 'Future World',
  keywords: ['ecomerce', 'future', 'world', 'tech']
};

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  );
}
