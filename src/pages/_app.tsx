'use client'

import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import MainLayout from "../layouts/MainLayout"
import AdminLayout from "../layouts/AdminLayout"
import type { AppProps } from "next/app"
import "../../src/globals.css"

function App({ Component, pageProps }: AppProps) {
	const router = useRouter()
	const [isAuthenticated, setIsAuthenticated] = useState(false)

	useEffect(() => {
		// Verificar autenticação (exemplo simples usando localStorage)
		const token = localStorage.getItem("authToken")
		if (token) {
			setIsAuthenticated(true)
		} else {
			setIsAuthenticated(false)
		}
	}, [])

	useEffect(() => {
		const publicPaths = ["/login", "/register", "/welcome"]
		const path = router.pathname

		if (!isAuthenticated && !publicPaths.includes(path)) {
			router.push("/login")
		}
	}, [isAuthenticated, router, router.pathname])

	const getLayout = () => {
		if (router.pathname.startsWith("/admin")) {
			return (
				<AdminLayout>
					<Component {...pageProps} />
				</AdminLayout>
			)
		}
		return (
			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
		)
	}

	return getLayout()
}

export default App
