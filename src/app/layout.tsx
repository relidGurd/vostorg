import './globals.css'
import { Inter } from 'next/font/google'
import ProvidersReact from "@/components/LayoutProvidersRedux/ProvidersReact";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Арт-объединение VOSTORG',
  description: 'Искусство для России',

}

export default function RootLayout({ children,}: { children: React.ReactNode}) {





  return (
    <html lang="en">
      <body className={inter.className}>
      <ProvidersReact>
        {children}
      </ProvidersReact>
      </body>
    </html>
  )
}
