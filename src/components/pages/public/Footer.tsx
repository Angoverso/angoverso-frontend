import { logo } from "../../../assets/icons"
import {
	downloadGoogle,
	facebookIcon,
	whatsappIcon,
} from "../../../assets/icons/Footer"

const Footer: React.FC = () => {
	return (
		<footer className="flex justify-around p-12 bg-[#0154FFED] w-full  text-white">
			<div>
				<img src={logo} alt="" />
			</div>

			<div className="flex flex-col gap-4">
				<h1>Links Úteis</h1>

				<a href="">Sobre a AngoVerso</a>
				<a href="">Quer se tornar um vendedor?</a>
			</div>

			<div className="flex flex-col gap-4">
				<h1>Categorias</h1>

				<a href="">Saúde</a>
				<a href="">Hospitalidade e Turismo</a>
				<a href="">Supermercado</a>
				<a href="">Lojas industriais</a>
				<a href="">Prestação de serviços</a>
			</div>
			<div className="flex flex-col gap-4">
				<h1>Baixe o nosso aplicativo</h1>

				<a href="">
					<img src={downloadGoogle} alt="" />
				</a>
			</div>
			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<h1>Contactos</h1>

					<a href="tel:+244923443234">+244 923 443 234</a>
					<a href="mailto:angoverso@geral.com">angoverso@geral.com</a>
				</div>

				<div className="flex flex-col gap-2">
					<h1>Siga-nos nas redes sociais</h1>

					<div className="flex gap-2 items-center">
						{" "}
						<a href="">
							<img src={facebookIcon} alt="" />
						</a>
						<a href="">
							<img src={whatsappIcon} alt="" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
