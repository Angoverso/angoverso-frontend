// /src/pages/index.tsx

import Link from "next/link"

export default function Home() {
	return (
		<main>
			<h1>Home Page</h1>
			<nav className="">
				<ul className="flex">
					<li>
						<Link href="/contact">Contact</Link>
					</li>
					<li>
						<Link href="/admin">Admin</Link>
					</li>
					<li>
						<Link href="/admin/users">Admin Users</Link>
					</li>

					<li>
						<Link href="/welcome">Bem-vindo</Link>
					</li>
				</ul>
			</nav>
		</main>
	)
}
