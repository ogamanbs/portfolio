import './globals.css'

export const metadata = {
  title: 'Aman Sharma | Portfolio',
  description: 'This is my portfolio web app, which contains everything about my professional background',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
