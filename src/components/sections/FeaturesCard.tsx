import GradientTitle from "@/components/core/GradientTitle";
import Image from "next/image";
import MedicalCrossIcon from "@/components/icons/MedicalCrossIcon";
import CalendarIcon from "@/components/icons/CalendarIcon";
import ThumbsUpIcon from "../icons/ThumbsUpIcon";
import HeartHandsIcon from "../icons/HeartHandsIcon";
import HeartIcon from "../icons/HeartIcon";
import GradientButton from "../core/GradientButton";
import ReviewsCard from "../core/ReviewsCard";
import type { Theme } from "@/types/colors";
import clsx from "clsx";
import Link from "next/link";

interface FeaturesCardProps {
	title: string;
	subtitle: string;
	description: TrustedHTML | string;
	image: string;
	theme?: Theme;
	link?: string;
}

export default function FeaturesCard(props: FeaturesCardProps) {
	const { title, subtitle, description, image, link, theme } = props;

	let textClasses;

	switch (theme) {
		case "pink":
			textClasses = "text-pink-200";
			break;
		case "green":
			textClasses = "text-primary-600";
			break;
		case "orange":
			textClasses = "text-brown-200";
			break;
		default:
			textClasses = "text-primary-dark";
			break;
	}

	const features = [
		{
			id: 1,
			title: "Specalist Doctors",
			icon: MedicalCrossIcon,
		},
		{
			id: 2,
			title: "Easy Online Booking",
			icon: CalendarIcon,
		},
		{
			id: 3,
			title: "Reassurance",
			icon: ThumbsUpIcon,
		},
		{
			id: 4,
			title: "Quality Care",
			icon: HeartHandsIcon,
		},
		{
			id: 5,
			title: "Peace of Mind",
			icon: HeartIcon,
		},
	];

	return (
		<section className="container mx-auto xl:px-24">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
				<div>
					<GradientTitle
						title={title}
						titleClassNames="text-4xl lg:text-6xl"
						subtitle={subtitle}
						subtitleClassNames="text-2xl lg:text-4xl lg:leading-16"
						gradientType={theme}
					/>
					<div
						className={clsx("text-xl text-gray-500 mt-4 tracking-wide", textClasses)}
						dangerouslySetInnerHTML={{
							__html: description,
						}}
					/>
					<ReviewsCard />
					<div className="grid grid-cols-2 lg:grid-cols-3">
						{features.map((feature) => {
							return (
								<div key={feature.id} className="p-3 flex flex-col">
									<feature.icon className="size-9 mb-4" />
									<h3 className={clsx("text-base lg:text-lg text-primary-dark")}>
										{feature.title}
									</h3>
								</div>
							);
						})}
						{link && (
							<div className="flex items-center">
								<Link href={link}>
									<GradientButton
										text="Learn More"
										classNames="font-normal"
										theme={theme}
									/>
								</Link>
							</div>
						)}
					</div>
				</div>
				<Image
					src={image}
					alt="Hero Image"
					width={500}
					height={500}
					className="w-full h-auto"
				/>
			</div>
		</section>
	);
}
