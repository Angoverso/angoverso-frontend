// src/layouts/index.ts
import React from "react"

import PrivateLayout from "./PrivateLayout"
import WelcomeLayout from "./WelcomeLayout"
import PublicLayout from "./PublicLayout"
import EmptyLayout from "./EmptyLayout"

const layouts: { [key: string]: React.FC<{ children: React.ReactNode }> } = {
	PublicLayout,
	PrivateLayout,
	WelcomeLayout,
	EmptyLayout,
}

const Layout: React.FC<{ layoutName: string; children: React.ReactNode }> = ({
	layoutName,
	children,
}) => {
	const LayoutComponent = layouts[layoutName]
	return <LayoutComponent>{children}</LayoutComponent>
}

export default Layout
