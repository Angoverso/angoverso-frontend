import React from "react"

const EmptyLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<main className="flex h-screen font-Inria justify-center items-center">
			<section>{children}</section>
		</main>
	)
}

export default EmptyLayout
