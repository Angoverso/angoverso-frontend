import React, { useState } from "react"
import PhoneInput from "react-phone-number-input/input"
import "react-phone-number-input/style.css" // Certifique-se de importar o CSS necessário para o componente PhoneInput
import { logo } from "../../assets/icons"

const CreateAccountParticular: React.FC = () => {
	const [phoneNumber, setPhoneNumber] = useState<string | undefined>()

	return (
		<div className="w-full min-h-screen flex flex-col items-center justify-center py-12">
			<form className="text-center flex flex-col gap-8 w-1/2 h-full ">
				<div className="flex flex-col items-center">
					<img src={logo} alt="" className="w-32" />
					<p className="text-[#000000A1] text-lg">
						Crie uma conta na AngoVerso.
					</p>
				</div>

				<div className="flex flex-col gap-2 ">
					{" "}
					<div className="w-full border-b border-[#000000] flex h-10">
						<input
							type="text"
							className="bg-transparent outline-none w-full"
							placeholder="Nome completo..."
						/>
					</div>
					<div className="w-full border-b border-[#000000] flex h-10">
						<input
							type="email"
							className="bg-transparent outline-none w-full"
							placeholder="Email..."
						/>
					</div>
					<div className="w-full border-b border-[#000000] flex h-10">
						<PhoneInput
							international
							placeholder="Insira seu contato..."
							defaultCountry="AO"
							className="bg-transparent outline-none w-full"
							value={phoneNumber}
							onChange={setPhoneNumber}
						/>
					</div>
					<div className="w-full border-b border-[#000000] flex h-10">
						<input
							type="text"
							className="bg-transparent outline-none"
							placeholder="Palavra-passe"
						/>
					</div>
					<div className="w-full border-b border-[#000000] flex h-10">
						<input
							type="text"
							className="bg-transparent outline-none"
							placeholder=" Confirmar palavra-passe"
						/>
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<button className="rounded-[10px] px-4 py-2 h-12 w-full bg-[#0154ffed] text-white hover:bg-[#0156ff88] transition-colors duration-500 flex gap-2 justify-center items-center">
						Criar conta
					</button>

					<p className="text-sm">
						Já tem uma conta?{" "}
						<span className="text-[#0154ffed]">Inicie sessão.</span>
					</p>
				</div>
			</form>
		</div>
	)
}

export default CreateAccountParticular
