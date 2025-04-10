import { MailIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import QuoteIcon from "@/components/icons/QuoteIcon";
import NewsletterForm from "@/components/core/NewsletterForm";
import FooterLinks from "../core/FooterLinks";
import SocialIcons from "./SocialIcons";

export default function Footer() {
	const links = [
		{
			heading: "Our Clinic",
			links: [
				{ title: "Our Clinic", link: "#" },
				{ title: "Our Values", link: "#" },
				{ title: "Our Doctors", link: "#" },
				{ title: "Articles", link: "#" },
				{ title: "Get in Touch", link: "#" },
			],
		},
		{
			heading: "Quick Links",
			links: [
				{ title: "Book Online", link: "#" },
				{ title: "For Clinicians", link: "#" },
				{ title: "Frequently Asked Questions", link: "#" },
			],
		},
		{
			heading: null,
			links: [
				{ title: "Feedback & Suggestions", link: "#" },
				{ title: "Terms & Conditions", link: "#" },
				{ title: "Privacy Policy", link: "#" },
				{ title: "Cookies Policy", link: "#" },
			],
		},
	];

	return (
		<footer className="bg-gradient-to-b from-primary-dark to-[#083444] py-14">
			<div className="container mx-auto">
				<Image
					src={"/images/harley-street-ultrasound-footer-logo-white.webp"}
					alt="Logo"
					width={170}
					height={90}
					className="mx-auto mb-10"
				/>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-6 mb-14">
					{/* Socials */}
					<div className="flex flex-col gap-4">
						<h4 className="text-white text-2xl lg:text-3xl mb-4 lg:mb-8"> Follow Us</h4>
						<SocialIcons />
					</div>
					{/* About */}
					<div className="relative text-white text-sm lg:text-base space-y-5 mt-20 lg:mt-0">
						<div className="absolute left-0 -top-16">
							<QuoteIcon className="text-white/10 h-16 w-14" />
						</div>
						<p className="px-7">
							At the HSUG, our specialist team delivers private ultrasound scans
							designed to give you the insight and peace of mind you need. We are the
							experts when it comes to ultrasonic diagnosis and treatment, and we have
							a strong track record of providing reassurance to our patients when they
							need it most.
						</p>
						<p className="px-7">
							You&apos;ll find us on Harley Street in London — a convenient location
							with a rich history of medical excellence. Our team is committed to
							continuing that history with our own set of expert services.
						</p>
					</div>
					{/* Newsletter */}
					<div>
						<NewsletterForm />
					</div>
				</div>

				{/* Footer Links */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
					<div>
						<h4 className="text-base lg:text-lg text-white font-semibold mb-3">
							Locations
						</h4>
						<div className="mb-2 text-base leading-[16px]">
							<p className="text-white leading-loose">
								99 Harley St <br />
								Marylebone <br />
								London <br />
								W1G 6AQ
							</p>
						</div>

						<h4 className="text-base lg:text-lg text-white font-semibold mb-3">
							Contact
						</h4>
						<div className="flex flex-col space-y-5">
							<div className="flex items-center gap-2 text-white font-semibold">
								<MailIcon className="size-6 shrink-0" />
								<a href="mailto:contact@harleystreetultrasound.com">
									{" "}
									contact@harleystreetultrasound.com
								</a>
							</div>
							<div className="flex items-center  gap-2 text-white font-semibold">
								<PhoneIcon className="size-6 shrink-0" />
								<a href="tel:0203 904 4441"> 0203 904 4441</a>
							</div>
						</div>
					</div>
					<div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-3 gap-6">
						{links.map((link, index) => (
							<FooterLinks key={index} heading={link.heading} links={link.links} />
						))}
					</div>
				</div>
				<div className="h-px bg-white w-full my-2.5"></div>
				<p className="text-sm text-white/80">
					{" "}
					&copy; {new Date().getFullYear()} Harley Street Ultrasound Group All Rights
					Reserved.
				</p>
			</div>
		</footer>
	);
}
