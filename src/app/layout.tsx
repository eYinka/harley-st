import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const generalSans = localFont({
	src: [
		{
			path: "./fonts/GeneralSans-Extralight.woff",
			weight: "200",
			style: "normal",
		},
		{
			path: "./fonts/GeneralSans-Light.woff",
			weight: "300",
			style: "normal",
		},
		{
			path: "./fonts/GeneralSans-Regular.woff",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/GeneralSans-Medium.woff",
			weight: "500",
			style: "normal",
		},
		{
			path: "./fonts/GeneralSans-Semibold.woff",
			weight: "600",
			style: "normal",
		},
		{
			path: "./fonts/GeneralSans-Bold.woff",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-general-sans",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Private Ultrasound Clinic London - Harley Street Ultrasound",
	description:
		"Private Ultrasound Scans provided by Specialist Consultants who actively practice at leading UK hospitals with the highest level of care",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${generalSans.className} antialiased`}>{children}</body>
		</html>
	);
}
