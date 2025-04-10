import Link from "next/link";

interface FooterLinksProps {
	heading: string | null;
	links: {
		title: string;
		link: string;
	}[];
}

export default function FooterLinks(props: FooterLinksProps) {
	const { heading, links } = props;
	return (
		<div className="flex flex-col space-y-10">
			<h4 className="text-base lg:text-lg text-white font-semibold mb-3">{heading}</h4>
			<ul className="flex flex-col space-y-2">
				{links.map((link, index) => (
					<li key={index}>
						<Link
							href={link.link}
							className="text-sm lg:text-base text-white hover:underline"
						>
							{link.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
