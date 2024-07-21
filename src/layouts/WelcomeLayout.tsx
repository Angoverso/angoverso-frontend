// src/layouts/PublicLayout.tsx
import React from "react"
import { bgWelcomeLayout } from "../assets/layouts/WelcomeLayout"

const WelcomeLayout: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<main className="flex h-screen font-Inter">
			<div className="w-1/2 overflow-y-auto">{children}</div>

			<div className="w-1/2 relative">
				<div className="absolute top-0 left-0 w-full h-full z-20 bg-[#0154FF66]"></div>
				<img
					src={bgWelcomeLayout}
					alt=""
					className="object-cover w-full h-full"
				/>
			</div>
		</main>
	)
}

export default WelcomeLayout
