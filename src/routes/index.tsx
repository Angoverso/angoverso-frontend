// src/routes/index.ts

import CreateAccountParticular from "../pages/public/CreateAccountParticular"
import Home from "../pages/public/Home"

import Welcome from "../pages/public/Welcome"

export const AllRoutes = [
	{
		path: "/",
		element: <Home />,
		label: "Home",
		type: "public",
		layout: "PublicLayout", // Referência ao layout por nome
		allowedType: "user",
	},
	{
		path: "/welcome",
		element: <Welcome />,
		label: "Welcome",
		type: "public",
		layout: "WelcomeLayout", // Referência ao layout por nome
		allowedType: "user",
	},
	{
		path: "/create-account/particular",
		element: <CreateAccountParticular />,
		label: "Create Particular Account",
		type: "public",
		layout: "WelcomeLayout", // Referência ao layout por nome
		allowedType: "user",
	},
]
