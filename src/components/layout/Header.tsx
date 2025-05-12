"use client";

import Link from "next/link";
import logo from "../../../public/images/logo.png";
import logoIcon from "../../../public/images/logo-icon.webp";
import Image from "next/image";
import GradientButton from "@/components/core/GradientButton";
import Hamburger from "@/components/core/Hamburger";
import { Button } from "@/components/shadcn/Button";
import { useEffect, useState } from "react";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/shadcn/navigation-menu";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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
			children: [
				{
					href: "/our-clinic/our-values",
					label: "Our Values",
				},
				{
					href: "/our-clinic/our-doctors",
					label: "Our Doctors",
				},
				{
					href: "/our-clinic/pricing-list",
					label: "Pricing List",
				},
				{
					href: "/travelling-to-our-clinic-in-harley-street",
					label: "Locations",
				},
				{
					href: "/our-clinic/get-in-touch",
					label: "Get in Touch",
				},
			],
		},
		{
			href: "/our-clinic/get-in-touch",
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

	const pathname = usePathname();

	const menuStyles = "text-primary-dark hover:text-secondary font-normal cursor-pointer";
	const activeStyles = "text-secondary";


	return (
		<header
			className={clsx(
				"px-4 py-3 sticky top-0 z-50 transition-all duration-300",
				scrolled && "bg-white",
			)}
		>
			<div className="container mx-auto flex items-center justify-between">
				<Link href={"/"}>
					<Image src={scrolled ? logoIcon : logo} alt="logo" className="w-auto h-16 " />
				</Link>

				<NavigationMenu className="hidden lg:flex  items-center gap-4">
					<NavigationMenuList>
						{links.map((link) => (
							<NavigationMenuItem key={link.href}>
								{link.children ? (
									<>
										<NavigationMenuTrigger
											className={cn(
												menuStyles,
												link.children.length > 0 &&
													pathname.startsWith(link.href) &&
													activeStyles,
											)}
										>
											{link.label}
										</NavigationMenuTrigger>
										<NavigationMenuContent className="border-0 bg-white">
											<ul className="w-28 flex flex-col space-y-4">
												{link.children.map((child) => (
													<Link
														key={child.href}
														href={child.href}
														legacyBehavior
														passHref
													>
														<NavigationMenuLink className={menuStyles}>
															{child.label}
														</NavigationMenuLink>
													</Link>
												))}
											</ul>
										</NavigationMenuContent>
									</>
								) : (
									<Link href={link.href} legacyBehavior passHref>
										<NavigationMenuLink
											className={cn(
												menuStyles,
												link.href == pathname && activeStyles,
											)}
										>
											{link.label}
										</NavigationMenuLink>
									</Link>
								)}
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>
				<div className="flex items-center gap-4">
					<Link href={"#"}>
						<GradientButton text="Book Online" />
					</Link>
					<Link href={"/for-clinicians"} className="hidden lg:block">
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
