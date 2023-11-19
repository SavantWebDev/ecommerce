import { Urbanist } from 'next/font/google'
import './globals.css'

const urbanist= Urbanist({ 
  weight: ['400','600'],
  subsets: ['latin'], 
  display: 'swap',
  variable: '--font-urbanist'

})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} `}>
        <main className='font-primary h-screendv'>
        {children}
        </main>
        </body>
    </html>
  )
}
