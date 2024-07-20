// /src/layouts/MainLayout.tsx

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "AngoVerso",
	description: "Encontre tudo aqui!",
}

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-PT">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
