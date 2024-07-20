

import Link from "next/link"

export default function Welcome() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
			<div className="bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto">
				<h1 className="text-4xl font-bold text-blue-600 mb-4">
					Bem Vindo ao AngoVerso
				</h1>
				<p className="text-gray-600 mb-8">
					Transformando números em soluções estratégicas
				</p>
				<div className="flex flex-col space-y-4">
					<Link
						href="/login?type=individual"
						className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
					>
						<i className="fas fa-user mr-2"></i>
						Particulares
					</Link>
					<Link
						href="/login?type=business"
						className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
					>
						<i className="fas fa-building mr-2"></i>
						Empresas
					</Link>
				</div>
				<div className="mt-8 flex justify-between text-sm text-gray-500">
					<Link href="/terms" className="hover:underline">
						Termos e Políticas de Privacidade
					</Link>
					<span>Todos os Direitos Reservados</span>
				</div>
			</div>
		</main>
	)
}
