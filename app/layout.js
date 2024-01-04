import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ghost',
  description: 'A web scraper that uses website data to train a model for chatbots, like chatgpt for every websites.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='max-w-10xl mx-auto'>
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  )
}
