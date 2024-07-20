// /src/layouts/AdminLayout.tsx

import "../../src/globals.css"

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT">
      <body>
        <header>Admin Header</header>
        <main>{children}</main>
      </body>
    </html>
  )
}
