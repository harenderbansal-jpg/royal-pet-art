export const metadata = {
  title: 'Royal Pet Portraits',
  description: 'Transform your beloved pets into majestic historical masterpieces',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

