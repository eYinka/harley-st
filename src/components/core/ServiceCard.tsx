import type { FullService, ServiceCardType, ServiceItem } from "@/lib/data-source";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import GradientButton from "./GradientButton";
import type { Theme } from "@/types/colors";

type ServiceCardProps = {
	card_type: ServiceCardType;
	service: ServiceItem;
	theme?: Theme;
};

export default function ServiceCard(props: ServiceCardProps) {
	const { card_type, service, theme } = props;

	const isFullCard = card_type === "full";

	let gradientClasses;
	let textClasses;
	let borderClasses;

	switch (theme) {
		case "pink":
			gradientClasses = "gradient_bg_pink";
			textClasses = "text-pink-200  before:text-pink-300";
			borderClasses = "border-pink-300";
			break;

		case "blue":
			gradientClasses = "gradient_bg_pink";
			textClasses = "text-pink-200  before:text-pink-300";
			borderClasses = "border-blue-100";
			break;

		case "green":
			gradientClasses = "gradient_bg_green";
			textClasses = "text-primary-600 before:text-green-300";
			borderClasses = "border-green-100";
			break;

		case "orange":
			gradientClasses = "gradient_bg_orange";
			textClasses = "text-brown-200 before:text-brown-300";
			borderClasses = "border-orange-300";
			break;

		default:
			gradientClasses = "gradient_bg";
			textClasses = "text-primary-dark before:text-primary-dark";
			borderClasses = "border-primary-dark";
			break;
	}

	return (
		<article
			className={clsx(
				"h-full bg-white p-6 w-full border-b-[3px] rounded-2xl card-shadow service_card",
				borderClasses,
			)}
		>
			{isFullCard ? (
				<FullCard
					service={service as FullService}
					theme={theme}
					gradientClasses={gradientClasses}
					textClasses={textClasses}
				/>
			) : (
				<CompactCard service={service} />
			)}
		</article>
	);
}

const FullCard = ({
	service,
	theme,
	gradientClasses,
	textClasses,
}: {
	service: FullService;
	theme?: Theme;
	gradientClasses: string;
	textClasses: string;
}) => {
	const { name, link, subtitle, features, price, price_subtitle, button_text } = service;
	return (
		<div className="flex flex-col justify-center h-full">
			<div className="md:flex w-full md:justify-between mb-6">
				<h3 className="flex flex-col md:w-2/3 md:border-r-[1px] md:border-black">
					<span className="font-medium text-3xl md:text-2xl mb-2 text-red-200">
						{name}
					</span>
					<span className={clsx("font-medium text-xl text-pink-200", textClasses)}>
						{subtitle}
					</span>
				</h3>
				<div className="md:flex md:flex-col md:items-end md:justify-center">
					<div
						className={clsx(
							"md:text-right font-medium text-3xl leading-10 md:text-4xl text-transparent bg-clip-text",
							gradientClasses,
						)}
					>
						{price}
					</div>
					<div className="text-xl md:text-base">{price_subtitle}</div>
				</div>
			</div>
			<div className="bg-gray-300 w-[85%] mx-auto h-[1px] mb-8"></div>
			<ul className={clsx("columns-1 mb-4", features?.length > 6 && "lg:columns-2")}>
				{features.map((feature, index) => (
					<li key={index} className={clsx("text-base mb-2", textClasses)}>
						<span className="pl-2.5">{feature} </span>
					</li>
				))}
			</ul>
			<Link href={link} className="block self-center">
				<GradientButton text={button_text} classNames="!font-normal" theme={theme} />
			</Link>
		</div>
	);
};

const CompactCard = ({ service }: { service: ServiceItem }) => {
	const { name, image, link } = service;
	return (
		<Link href={link} className="block">
			{image && (
				<Image
					src={image}
					alt={name}
					width={300}
					height={160}
					loading="lazy"
					className="w-full h-full object-cover max-h-[160px] rounded-2xl mb-2 border border-white"
				/>
			)}
			<h3 className="text-lg text-primary-dark text-center">{name}</h3>
		</Link>
	);
};
