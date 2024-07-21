// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { AllRoutes } from "./routes/index"
import Layout from "./layouts"

import NotFoundPage from "./pages/404"
import Unauthorized from "./pages/Unauthorized"
import PrivateRoute from "./routes/PrivateRoute"
import PublicRoute from "./routes/PublicRoute"

function App() {
	return (
		<Router>
			<Routes>
				{AllRoutes.map((route) => (
					<Route
						key={route.path}
						path={route.path}
						element={
							route.type === "private" ? (
								<PrivateRoute
									element={
										<Layout layoutName={route.layout}>{route.element}</Layout>
									}
									allowedType={route.allowedType}
								/>
							) : (
								<PublicRoute
									element={
										<Layout layoutName={route.layout}>{route.element}</Layout>
									}
								/>
							)
						}
					/>
				))}

				<Route path="/unauthorized" element={<Unauthorized />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Router>
	)
}

export default App
