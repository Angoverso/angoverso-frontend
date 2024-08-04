import React from "react"
import "react-phone-number-input/style.css" // Certifique-se de importar o CSS necessário para o componente PhoneInput
import { logo } from "../../assets/icons"
import { googleIcon } from "../../assets/icons/pages/public"

const Login: React.FC = () => {
	return (
		<div className="w-full min-h-screen flex flex-col items-center justify-center py-12 relative">
			<form className="text-center flex flex-col gap-8 w-2/4 h-full items-center">
				<div className="flex flex-col items-center">
					<a href="/">
						<img src={logo} alt="" className="w-32" />
					</a>

					<p className="text-[#000000A1] text-lg">Bem-vindo à AngoVerso.</p>
				</div>

				<div className="flex flex-col gap-2 h-44 justify-around w-full">
					<div className="flex flex-col gap-2">
						<div className="w-full border-b border-[#000000] flex h-10">
							<input
								type="email"
								className="bg-transparent outline-none w-full"
								placeholder="Email..."
							/>
						</div>

						<div className="w-full border-b border-[#000000] flex h-10">
							<input
								type="text"
								className="bg-transparent outline-none w-full"
								placeholder="Palavra-passe"
							/>
						</div>
					</div>

					<button className="rounded-[10px] px-4 py-2 h-12 w-full bg-[#0154ffed] text-white hover:bg-[#0156ff88] transition-colors duration-500 flex gap-2 justify-center items-center">
						Iniciar Sessão
					</button>
				</div>

				<div className="flex w-2/3 gap-2 items-center">
					<hr className="border w-full" />
					ou
					<hr className="border w-full" />
				</div>

				<button className="flex items-center gap-2">
					<img src={googleIcon} alt="" /> <p>Entre com o Google</p>
				</button>

				<p className="text-sm">
					Não tem uma conta?{" "}
					<a href="/welcome" className="text-[#0154ffed] hover:underline">
						Crie uma conta.
					</a>
				</p>
			</form>
		</div>
	)
}

export default Login
