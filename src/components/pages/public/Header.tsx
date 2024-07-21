import { Link } from "react-router-dom"
import { logo } from "../../../assets/icons"
import {
	cartIcon,
	favoriteIcon,
	notificationIcon,
	searchIcon,
} from "../../../assets/icons/Header"

const Header: React.FC = () => {
	return (
		<header className="flex items-center justify-between w-full h-24 px-12">
			<img src={logo} alt="Logo" className="w-16" />

			<div className="flex gap-2 items-center w-2/5 ">
				<div className="flex bg-[#D9D9D9B0] py-2 pl-4 pr-2 h-11 rounded-md gap-2 items-center w-full justify-between">
					<div className="flex gap-2 items-center w-2/3">
						<img src={searchIcon} alt="Seach Icon" className="w-4" />
						<input
							type="search"
							name=""
							id=""
							placeholder="Pesquisar produtos, categorias e serviços..."
							className="bg-transparent outline-none placeholder:text-[#808080E5] w-full"
						/>
					</div>

					<button className="p-2 hover:bg-[#b0b0b0ba] bg-[#B0B0B0] rounded-md text-xs transition-colors duration-300">
						Todas categorias
					</button>
				</div>

				<button className="px-4 py-2 h-10 bg-[#0154FF] text-white hover:text-[#0154FF] hover:bg-white hover:border border-[#0154ff]  rounded-md transition-colors duration-500 flex items-center justify-center hover:px-[15px] text-xs">
					Procurar
				</button>
			</div>

			<a href="#" className="flex gap-2 items-center text-xs">
				<img src={favoriteIcon} alt="Favourite" className="text-xs" />
				Lista de desejos
			</a>

			<div className="flex gap-8 items-center">
				<div className="flex justify-between items-center w-12">
					<button>
						<img src={notificationIcon} alt="" />
					</button>

					<button>
						<img src={cartIcon} alt="" />
					</button>
				</div>

				<div className="flex gap-2">
					<Link
						to="/login"
						className="px-4 py-1 h-10 bg-[#0154FF] text-white hover:text-[#0154FF] hover:bg-white hover:border border-[#0154ff]  rounded-md w-62 transition-colors duration-500 flex items-center justify-center text-xs hover:px-[15px]"
					>
						Iniciar Sessão
					</Link>

					<Link
						to="/welcome"
						className="flex items-center justify-center px-4 py-2 h-10 text-[#0154FF] bg-white hover:bg-[#0154FF] hover:text-white rounded-md w-62 text-xs border border-[#0154FF] transition-colors duration-500"
					>
						Registrar-se
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
