import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Salman Arya Sandytia - Full-Stack Engineer & CCNA',
  description: 'Salman Arya Sandytia - Full-Stack Engineer & CCNA',
  openGraph: {
    title: 'Salman Arya Sandytia - Full-Stack Engineer & CCNA',
    description: 'Salman Arya Sandytia - Full-Stack Engineer & CCNA',
    type: 'website',
    locale: 'id_ID',
    images: [
      {
        url: '/section.png',
        width: 1200,
        height: 630,
        alt: 'Salman Arya Sandytia - Full-Stack Engineer & CCNA'
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      {/* Tambahkan link FontAwesome di dalam head untuk memuat ikon */}
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" 
        />
      </head>
      <body className={`${inter.className} bg-[#0a0a0a] text-white`}>
        {children}
      </body>
    </html>
  );
}