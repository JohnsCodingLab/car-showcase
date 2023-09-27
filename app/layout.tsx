import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Car Rental Hub',
  description: 'Come and Discover the best cars in the world',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      {/* <Navbar /> */}
      <body className='relative'>{children}</body>
      {/* <Footer /> */}
    </html>
  );
}
