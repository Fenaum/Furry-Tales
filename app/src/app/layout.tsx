import type { Metadata } from 'next'
import Navbar from '@/components/Navigation/Navbar';
import './globals.css'

export const metadata: Metadata = {
  title: 'Furry Tales',
  description: 'Developed by fenaum.io',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
