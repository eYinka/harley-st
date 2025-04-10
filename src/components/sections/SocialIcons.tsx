import clsx from "clsx";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

interface SocialIconsProps {
	dark?: boolean;
}

export default function SocialIcons(props: SocialIconsProps) {
	const { dark } = props;

	const socials = [
		{
			id: 1,
			name: "Instagram",
			link: "#",
			icon: InstagramIcon,
		},
		{
			id: 2,
			name: "Facebook",
			link: "#",
			icon: FacebookIcon,
		},
		{
			id: 3,
			name: "Twitter",
			link: "#",
			icon: TwitterIcon,
		},
		{
			id: 4,
			name: "Linkedin",
			link: "#",
			icon: LinkedinIcon,
		},
	];
	return (
		<div className="flex items-center gap-4">
			{socials.map((social) => {
				const Icon = social.icon;
				return (
					<a
						key={social.id}
						href={social.link}
						target="_blank"
						rel="noopener noreferrer"
						className={clsx(
							"inline-flex items-center justify-center size-12 rounded-full transition duration-200 p-2",
							dark
								? "bg-primary-dark hover:bg-primary-dark/90"
								: "bg-white/20 hover:bg-white/30",
						)}
					>
						<Icon className="text-white size-6 hover:text-primary-light transition duration-200" />
					</a>
				);
			})}
		</div>
	);
}
