// src/layouts/PrivateLayout.tsx
import React from "react"

const PrivateLayout: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<div>
			<header>Private Header</header>
			<main>{children}</main>
			<footer>Private Footer</footer>
		</div>
	)
}

export default PrivateLayout
