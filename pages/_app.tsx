import type { AppProps } from 'next/app'
import { Inter, Playfair_Display } from 'next/font/google'
import { Toaster } from 'sonner'
import { CartProvider } from '@/context/cart-context'
import '@/app/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${playfair.variable} bg-blanco-menta font-sans antialiased`}>
      <CartProvider>
        <Component {...pageProps} />
        <Toaster 
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#1a3a2f',
              color: '#f5fff9',
              border: '1px solid #b68c2d',
            },
          }}
        />
      </CartProvider>
    </div>
  )
}
