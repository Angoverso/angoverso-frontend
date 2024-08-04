import React from "react"
import {
	empresasIcon,
	particularIcon,
} from "../../assets/icons/pages/public/Welcome"
import { Link } from "react-router-dom"

const Welcome: React.FC = () => {
	return (
		<div className="w-full min-h-screen h-screen flex flex-col items-center justify-between relative">
			<div className="flex flex-col items-center  gap-20 h-96 justify-center py-20 my-auto">
				<div className="text-center flex flex-col gap-2">
					<h1 className="text-4xl text-[#0154FFED] font-bold">
						Seja bem-vindo à AngoVerso!
					</h1>
					<p className=" text-[#000000A1] ">
						Transformando números em soluções estratégicas
					</p>
				</div>

				<div className="flex flex-col gap-4">
					<Link
						to="/create-account/particular"
						className="rounded-[10px] px-4 py-2 h-12 w-56 bg-[#0154ffed] text-white hover:bg-[#0156ff88] transition-colors duration-500 flex gap-2 justify-center items-center"
					>
						<img src={particularIcon} alt="" />Particular
					</Link>
					<Link
						to="/create-account/enterprise"
						className="rounded-[10px] px-4 py-2 h-12 w-56 bg-[#0154ffed] text-white hover:bg-[#0156ff88] transition-colors duration-500 flex gap-2 justify-center items-center"
					>
						<img src={empresasIcon} alt="" /> Empresa
					</Link>
				</div>
			</div>

			<div className="py-2 px-4 flex justify-between text-[#00000080] font-semibold text-sm text-center w-full">
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
