"use client";

import Link from "next/link";
import logo from "../../../public/images/logo.png";
import logoIcon from "../../../public/images/logo-icon.webp";
import Image from "next/image";
import GradientButton from "@/components/core/GradientButton";
import Hamburger from "@/components/core/Hamburger";
import { Button } from "@/components/shadcn/Button";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Header() {
	const [scrolled, setScrolled] = useState(false);

	const links = [
		{
			href: "/private-female-ultrasound-scan-services",
			label: "Female",
		},
		{
			href: "/private-male-ultrasound-scan-services",
			label: "Male",
		},
		{
			href: "/private-paediatric-ultrasound-services",
			label: "Children",
		},
		{
			href: "/private-muscle-joints-ultrasound-scan-services",
			label: "Muscle & Joints",
		},
		{
			href: "/articles",
			label: "Articles",
		},
		{
			href: "/our-clinic",
			label: "Our Clinic",
		},
		{
			href: "/get-in-touch",
			label: "Get in Touch",
		},
	];

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 200);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className={clsx("px-4 py-3 sticky top-0 z-50 transition-all duration-300", scrolled && "bg-white")}>
			<div className="container mx-auto flex items-center justify-between">
				<Link href={"/"}>
					<Image src={scrolled ? logoIcon : logo} alt="logo" className="w-auto h-16 " />
				</Link>
				<nav className="hidden lg:flex  items-center gap-4">
					{links.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="text-primary-dark hover:text-secondary"
						>
							{link.label}
						</Link>
					))}
				</nav>
				<div className="flex items-center gap-4">
					<Link href={"/login"}>
						<GradientButton text="Book Online" />
					</Link>
					<Link href={"/register"} className="hidden lg:block">
						<Button
							variant="outline"
							size="lg"
							className="rounded-full border-2 text-primary-dark border-primary-dark h-12"
						>
							Clinicians
						</Button>
					</Link>
					<Hamburger />
				</div>
			</div>
		</header>
	);
}
