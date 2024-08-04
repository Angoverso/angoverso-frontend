// src/routes/index.ts

import CreateAccountEnterprise from "../pages/public/CreateAccountEnterprise"
import CreateAccountParticular from "../pages/public/CreateAccountParticular"
import CreatedWelcome from "../pages/public/CreatedWelcome/CreatedWelcome"
import Home from "../pages/public/Home"
import Login from "../pages/public/Login"
import VerificationPage from "../pages/public/VerificationPage"

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
	{
		path: "/create-account/enterprise",
		element: <CreateAccountEnterprise />,
		label: "Create Enterprise Account",
		type: "public",
		layout: "WelcomeLayout", // Referência ao layout por nome
		allowedType: "user",
	},
	{
		path: "/login",
		element: <Login />,
		label: "Login",
		type: "public",
		layout: "WelcomeLayout", // Referência ao layout por nome
		allowedType: "user",
	},
	{
		path: "/verification-page",
		element: <VerificationPage />,
		label: "Verification Page",
		type: "public",
		layout: "EmptyLayout", // Referência ao layout por nome
		allowedType: "user",
	},
	{
		path: "/created-welcome",
		element: <CreatedWelcome />,
		label: "Welcome to Angoverso",
		type: "public",
		layout: "EmptyLayout", // Referência ao layout por nome
		allowedType: "user",
	},
]
