// src/layouts/PublicLayout.tsx
import React from "react"
import Header from "../components/pages/public/Header"
import Footer from "../components/pages/public/Footer"

const PublicLayout: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<div className="font-Inter">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	)
}

export default PublicLayout
