import React, { useState } from "react"
import { logo } from "../../assets/icons"
import { useNavigate } from "react-router-dom"

const VerificationPage: React.FC = () => {
	const [codes, setCodes] = useState(["", "", "", ""])
	const navigate = useNavigate()

	const handleCodeChange =
		(index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
			const newCodes = [...codes]
			newCodes[index] = e.target.value
			setCodes(newCodes)

			// Automatically focus the next input field if the current one has a value
			if (e.target.value && index < 3) {
				const nextSibling = document.querySelector<HTMLInputElement>(
					`input[name=code-${index + 1}]`
				)
				if (nextSibling !== null) {
					nextSibling.focus()
				}
			}
		}

	const handleSubmit = () => {
		const verificationCode = codes.join("")
		console.log("Verification code submitted:", verificationCode)
		navigate("/created-welcome")
	}

	return (
		<div className="flex flex-col items-center justify-center min-h-screen ">
			<div className="p-8 flex flex-col items-center gap-4 w-3/4">
				<a href="#">
					<img src={logo} alt="" className="w-32" />
				</a>

				<h2 className="text-4xl text-gray-700">Verificação da Conta</h2>
				<p className="text-gray-500">
					Introduza o código de confirmação enviado para este endereço
					eletrónico:
				</p>
				<div className="flex items-center justify-center gap-2 w-full">
					{codes.map((code, index) => (
						<input
							key={index}
							type="text"
							name={`code-${index}`}
							maxLength={1}
							value={code}
							onChange={handleCodeChange(index)}
							className="w-16 h-16 text-center border border-black-100 rounded-lg focus:outline-none focus:border-blue-600"
						/>
					))}
				</div>
				<button
					onClick={handleSubmit}
					className="w-full py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition duration-300 text-xl"
				>
					Confirma o código
				</button>
				<p className="text-gray-500 mt-4">
					<a href="#" className="underline">
						Reenviar o codigo de confirmação?
					</a>
				</p>
			</div>
		</div>
	)
}

export default VerificationPage
