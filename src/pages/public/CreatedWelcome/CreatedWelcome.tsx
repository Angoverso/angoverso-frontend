// src/App.tsx
import React from "react"
import "./created-welcome.css"
import { elipse } from "../../../assets/icons/pages/public/CreatedWelcome"
import { useNavigate } from "react-router-dom"

const CreatedWelcome: React.FC = () => {
	const navigate = useNavigate()

	function handleClick() {
		navigate("/")
	}

	return (
		<section className="flex items-center justify-center min-h-screen bg-[#2E66F9] w-screen relative">
			<img
				src={elipse}
				alt=""
				className="absolute right-0 top-0 animate-pulse"
			/>
			<div className="text-center">
				<h1 className="text-5xl font-bold text-white animate-slide-in">
					Bem Vindo Angoverso
				</h1>
				<button
					onClick={() => handleClick()}
					className="mt-4 text-white animate-pulse cursor-pointer"
				>
					Clique aqui para continuar
				</button>
			</div>
		</section>
	)
}

export default CreatedWelcome
