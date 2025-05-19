import type { Metadata } from "next";
import { headers } from "next/headers";

import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";

import { Body, HTML, Main, Navbar } from "@/components/ui";

import { pickDictionary } from "@/services";
import { LogoDark, LogoLight } from "@/components/svg";

export async function generateMetadata(): Promise<Metadata> {
	const requestHeaders = await headers();

	const lang = requestHeaders.get("lang") || "en";

	const { title, description } = pickDictionary(lang).og;

	return {
		title,
		metadataBase: new URL(process.env.BASE_URL),
		description,
		openGraph: {
			type: "website",
			siteName: title,
			url: new URL(process.env.BASE_URL),
			locale: "pt-BR",
			title,
			description,
			images: {
				url: `${process.env.BASE_URL}/og-cover.webp`,
			},
		},
		keywords: ["Alan Reis", "Alan", "QRCode", "qr"],
	};
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<HTML>
			<Body>
				<Navbar.Root DarkLogo={LogoDark} LightLogo={LogoLight}>
					<Navbar.MadeBy />
				</Navbar.Root>
				<Main className="">{children}</Main>
				<SpeedInsights />
			</Body>
		</HTML>
	);
}
