import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vizbiz - AI Competitive Visibility for Car Dealerships',
  description: 'Make your dealership unmissable to AI. Car buyers use ChatGPT, Claude, and Perplexity to find dealerships. Most dealers are invisible. We fix that.',
  keywords: ['AI visibility', 'car dealerships', 'AI search', 'automotive marketing', 'ChatGPT', 'Claude', 'Perplexity'],
  openGraph: {
    title: 'Vizbiz - AI Competitive Visibility for Car Dealerships',
    description: 'Make your dealership unmissable to AI. Get your free AI visibility audit today.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  )
}