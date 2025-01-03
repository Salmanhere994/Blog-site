import Link from 'next/link'
import './globals.css'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Bloggy',
  description: 'A simple blog website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#FDF8F5]">
        <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-neutral-200 p-4 z-10">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-neutral-900">Bloggy</Link>
            <div className="space-x-6">
              <Link href="/" className="text-neutral-600 hover:text-neutral-900 transition-colors">Home</Link>
              <Link href="/blogs" className="text-neutral-600 hover:text-neutral-900 transition-colors">Blogs</Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

