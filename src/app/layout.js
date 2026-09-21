import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Salman Arya Sandytia | Portfolio',
  description: 'Portfolio website of Salman Arya Sandytia, Software Engineering student and UI/UX enthusiast.',
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