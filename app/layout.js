export const metadata = {
  title: 'Royal Pet Portraits',
  description: 'Transform your beloved pets into majestic historical masterpieces',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Tailwind CSS Script for instant premium styling */}
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
