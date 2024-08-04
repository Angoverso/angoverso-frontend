import React from "react"
import { logo } from "../../assets/icons"
import { useNavigate } from "react-router-dom"
import { useForm, Controller } from "react-hook-form"

// Define the interface for the form data
interface FormData {
	companyName: string
	email: string
	nif: string
	phone: string
	password: string
	confirmPassword: string
}

const CreateAccountEnterprise: React.FC = () => {
	const navigate = useNavigate()
	const {
		handleSubmit,
		control,
		getValues,
		formState: { errors },
	} = useForm<FormData>()

	const onSubmit = (data: FormData) => {
		console.log(data)
		navigate("/verification-page")
	}

	return (
		<div className="w-full min-h-screen flex flex-col items-center justify-center py-12 relative">
			<p className="absolute top-4 right-4 border-b-4 border-[#1976D2]">
				Empresas
			</p>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="text-center flex flex-col gap-8 w-2/4 h-full"
			>
				<div className="flex flex-col items-center">
					<a href="/">
						<img src={logo} alt="" className="w-32" />
					</a>
					<p className="text-[#000000A1] text-lg">
						Crie uma conta na AngoVerso.
					</p>
				</div>

				<div className="flex flex-col ">
					<div className="w-full border-b border-[#000000] flex h-10">
						<Controller
							name="companyName"
							control={control}
							defaultValue=""
							rules={{ required: "Nome da empresa é obrigatório" }}
							render={({ field }) => (
								<input
									type="text"
									className="w-full"
									placeholder="Nome da empresa"
									{...field}
								/>
							)}
						/>
					</div>
					{errors.companyName && (
						<span className="w-full text-red-600 text-xs text-left">
							{String(errors.companyName.message)}
						</span>
					)}

					<div className="w-full border-b border-[#000000] flex h-10">
						<Controller
							name="email"
							control={control}
							defaultValue=""
							rules={{
								required: "Email é obrigatório",
								pattern: {
									value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
									message: "Endereço de email inválido",
								},
							}}
							render={({ field }) => (
								<input
									type="email"
									className="bg-transparent outline-none w-full"
									placeholder="Email"
									{...field}
								/>
							)}
						/>
					</div>
					{errors.email && (
						<span className="w-full text-red-600 text-xs text-left">
							{String(errors.email.message)}
						</span>
					)}

					<div className="w-full border-b border-[#000000] flex h-10">
						<Controller
							name="nif"
							control={control}
							defaultValue=""
							rules={{ required: "NIF é obrigatório" }}
							render={({ field }) => (
								<input
									type="tel"
									className="bg-transparent outline-none w-full"
									placeholder="NIF"
									{...field}
								/>
							)}
						/>
					</div>
					{errors.nif && (
						<span className="w-full text-red-600 text-xs text-left">
							{String(errors.nif.message)}
						</span>
					)}

					<div className="w-full border-b border-[#000000] flex h-10">
						<Controller
							name="phone"
							control={control}
							defaultValue=""
							rules={{ required: "Contacto é obrigatório" }}
							render={({ field }) => (
								<input
									type="tel"
									className="bg-transparent outline-none w-full"
									placeholder="Contacto"
									{...field}
								/>
							)}
						/>
					</div>
					{errors.phone && (
						<span className="w-full text-red-600 text-xs text-left">
							{String(errors.phone.message)}
						</span>
					)}

					<div className="w-full border-b border-[#000000] flex h-10">
						<Controller
							name="password"
							control={control}
							defaultValue=""
							rules={{ required: "Palavra-passe é obrigatória" }}
							render={({ field }) => (
								<input
									type="password"
									className="bg-transparent outline-none w-full"
									placeholder="Palavra-passe"
									{...field}
								/>
							)}
						/>
					</div>
					{errors.password && (
						<span className="w-full text-red-600 text-xs text-left">
							{String(errors.password.message)}
						</span>
					)}

					<div className="w-full border-b border-[#000000] flex h-10">
						<Controller
							name="confirmPassword"
							control={control}
							defaultValue=""
							rules={{
								required: "Confirmação da palavra-passe é obrigatória",
								validate: (value: string) => {
									if (value !== getValues("password")) {
										return "As palavras-passe não correspondem"
									}
								},
							}}
							render={({ field }) => (
								<input
									type="password"
									className="bg-transparent outline-none w-full"
									placeholder="Confirmar palavra-passe"
									{...field}
								/>
							)}
						/>
					</div>
					{errors.confirmPassword && (
						<span className="w-full text-red-600 text-xs text-left">
							{String(errors.confirmPassword.message)}
						</span>
					)}
				</div>

				<div className="flex flex-col gap-4">
					<button
						type="submit"
						className="rounded-[10px] px-4 py-2 h-12 w-full bg-[#0154ffed] text-white hover:bg-[#0156ff88] transition-colors duration-500 flex gap-2 justify-center items-center"
					>
						Criar conta
					</button>

					<p className="text-sm">
						Já tem uma conta?{" "}
						<a href="/login" className="text-[#0154ffed] hover:underline">
							Inicie sessão.
						</a>
					</p>
				</div>
			</form>
		</div>
	)
}

export default CreateAccountEnterprise
