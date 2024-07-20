"use client"
import { empresasIcon, particularIcon } from "@/assets/icons/welcome"
import Image from "next/image"

export default function Welcome() {
	return (
		<section className="w-full h-full flex flex-col justify-between text-center">
			<div className="flex flex-col justify-between my-auto h-64">
				<div className="flex flex-col gap-2 items-center ">
					<h1 className="text-[#0154FFED] text-4xl font-bold">
						Seja bem-vindo ao AngoVerso!
					</h1>
					<p className="text-[#00000070] font-bold">
						Transformando números em soluções estratégicas.
					</p>
				</div>

				<div className=" flex flex-col gap-2 w-full justify-center items-center">
					<button className="group flex items-center justify-center gap-2 bg-[#0154FFED] py-2 h-12 px-4 w-52 text-white hover:bg-[#0156ffb2] rounded-xl transition-colors duration-500">
						<Image src={particularIcon} alt="" className="w-4" />{" "}
						Particular
					</button>
					<button className="group flex items-center justify-center gap-2 bg-[#0154FFED] py-2 h-12 px-4 w-52 text-white hover:bg-[#0156ffb2] rounded-xl transition-colors duration-500">
						<Image src={empresasIcon} alt="" className="w-5" />{" "}
						Empresas
					</button>
				</div>
			</div>

			<div className="flex justify-between px-4 py-2">
				<p className="underline text-[#00000070] text-xs">
					Termos e Políticas de Privacidade
				</p>

				<p className="underline text-[#00000070] text-xs">
					Todos os Direitos Reservados
				</p>
			</div>
		</section>
	)
}
