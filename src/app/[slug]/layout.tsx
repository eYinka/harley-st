import Footer from "@/components/sections/Footer";

export default function PageLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<main>{children}</main>
			<Footer />
		</>
	);
}
