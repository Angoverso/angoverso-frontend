// /src/layouts/MainLayout.tsx

import type { Metadata } from "next"
import Image from "next/image"
import { Inter } from "next/font/google"
import "../../src/globals.css"
import { bgAside } from "@/assets/layouts/MainLayout"

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
		<main className="h-screen flex">
			<section className="w-1/2 overflow-y-auto flex flex-col justify-center items-center">
				{children}
			</section>
			<div className="w-1/2 relative h-full">
				<Image
					src={bgAside}
					alt=""
					className="w-full object-cover object-center"
				/>
			</div>
		</main>
	)
}
