import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import Nav from "./nav";
import { Suspense } from "react";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const metadata = {
	title: "Handcrafted Games Demo",
	description:
		"A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, ESLint, and Prettier.",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	const { isAuthenticated, getUser } = getKindeServerSession();
	const user = await getUser();

	return (
		<html lang="en" className="h-full bg-gray-50">
			<body className="h-full">
				<Suspense>
					<Nav />
				</Suspense>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
