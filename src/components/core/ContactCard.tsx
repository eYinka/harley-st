import type React from "react";

interface ContactCardProps {
	title: string;
	text: string;
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export default function ContactCard(props: ContactCardProps) {
	const { title, text, icon: Icon } = props;

	return (
		<div className="flex items-center gap-x-2.5 bg-blue-500 md:px-5 px-3 py-5 rounded-[12px]">
			<Icon className="size-8" />
			<div>
				<h4 className="text-sm text-primary-dark font-semibold">{title}</h4>
        <p className="text-sm text-gray-500">{text}</p>
			</div>
		</div>
	);
}
