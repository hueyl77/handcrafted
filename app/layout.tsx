import "./globals.css"

import Nav from "./nav"
import { Suspense } from "react"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import Footer from "./footer"

export const metadata = {
	title: "Handcrafted Games Demo",
	description:
		"Create Printable Custom Personalized Board Games.",
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {

	const { isAuthenticated, getUser } = getKindeServerSession()
	const user = await getUser()

	return (
		<html lang="en" className="h-full bg-gray-50">
			<body className="h-full">
				<Suspense>
					<Nav />
				</Suspense>
				{children}

				<Footer />
			</body>
		</html>
	)
}
