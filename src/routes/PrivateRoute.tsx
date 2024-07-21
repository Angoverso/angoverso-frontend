import React from "react"
import { Navigate } from "react-router-dom"

const useAuth = () => {
	// Substituir pela autenticação depois... vai vir da API
	const user = { loggedIn: true, type: "admin" } // Exemplo
	return user
}

const PrivateRoute: React.FC<{ element: JSX.Element; allowedType: string }> = ({
	element,
	allowedType,
}) => {
	const user = useAuth()
	return user.loggedIn && user.type === allowedType ? (
		element
	) : (
		<Navigate to="/unauthorized" />
	)
}

export default PrivateRoute
