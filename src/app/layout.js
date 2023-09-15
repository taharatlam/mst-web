
import './globals.css'
import '../assets/scss/main.scss'
import '../assets/scss/res.scss'
import { Inter, Poppins } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'


const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800", "900"]
})

export const metadata = {
  title: 'MST - My Saloon Time',
  description: 'my saloon time',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  )
}
