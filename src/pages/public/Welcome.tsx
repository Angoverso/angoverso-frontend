import React from "react"
import {
	empresasIcon,
	particularIcon,
} from "../../assets/icons/pages/public/Welcome"
import { Link } from "react-router-dom"

const Welcome: React.FC = () => {
	return (
		<div className="w-full h-full flex flex-col justify-between min-h-screen">
			<div className="h-full flex flex-col justify-around items-center">
				<div className="flex flex-col items-center justify-between h-1/2 max-h-64">
					<div className="text-center flex flex-col gap-2">
						<h1 className="text-4xl text-[#0154FFED] font-bold">
							Seja bem-vindo à AngoVerso!
						</h1>
						<p className="">Transformando números em soluções estratégicas</p>
					</div>

					<div className="flex flex-col gap-4">
						<Link
							to="/create-account/particular"
							className="rounded-[10px] px-4 py-2 h-12 w-56 bg-[#0154ffed] text-white hover:bg-[#0156ff88] transition-colors duration-500 flex gap-2 justify-center items-center"
						>
							<img src={particularIcon} alt="" /> Individual
						</Link>
						<button className="rounded-[10px] px-4 py-2 h-12 w-56 bg-[#0154ffed] text-white hover:bg-[#0156ff88] transition-colors duration-500 flex gap-2 justify-center items-center">
							<img src={empresasIcon} alt="" /> Empresa
						</button>
					</div>
				</div>
			</div>

			<div className="py-2 px-4 flex justify-between text-[#00000080] font-semibold text-sm text-center">
				<a href="" className="underline">
					Termos e Políticas de Privacidade
				</a>
				<a href="" className="">
					Todos os Direitos Reservados
				</a>
			</div>
		</div>
	)
}

export default Welcome
