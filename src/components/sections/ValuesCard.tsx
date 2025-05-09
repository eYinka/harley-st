import GradientTitle from "@/components/core/GradientTitle";
import Image from "next/image";
import GradientButton from "../core/GradientButton";
import ReviewsCard from "../core/ReviewsCard";
import type { Theme } from "@/types/colors";
import clsx from "clsx";
import UserIcon from "../icons/UserIcon";
import UserBadgeIcon from "../icons/UserBadgeIcon";
import UsersStarsIcon from "../icons/UsersStarsIcon";
import ScaleIcon from "../icons/ScaleIcon";
import CommentIcon from "../icons/CommentIcon";
import Link from "next/link";

interface ValuesCardProps {
	title: string;
	subtitle: string;
	description: TrustedHTML | string;
	image: string;
	link?: string;
	showReviews?: boolean;
	showFeatures?: boolean;
	theme?: Theme;
}

export default function ValuesCard(props: ValuesCardProps) {
	const { title, subtitle, description, image, link, showReviews, showFeatures, theme } = props;

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
			title: "Professionalism",
			icon: UserIcon,
		},
		{
			id: 2,
			title: "Integrity",
			icon: UserBadgeIcon,
		},
		{
			id: 3,
			title: "Expertise",
			icon: UsersStarsIcon,
		},
		{
			id: 4,
			title: "Equality",
			icon: ScaleIcon,
		},
		{
			id: 5,
			title: "Clear Communication",
			icon: CommentIcon,
		},
	];

	return (
		<section className="container mx-auto xl:px-24">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
				<Image
					src={image}
					alt="Hero Image"
					width={500}
					height={500}
					className="w-full h-auto"
				/>
				<div>
					<GradientTitle
						title={title}
						titleClassNames="text-4xl lg:text-6xl"
						subtitle={subtitle}
						subtitleClassNames="text-2xl lg:text-5xl lg:leading-16"
						gradientType={theme}
					/>
					<div
						className={clsx(
							"text-lg text-gray-500 mt-4 tracking-wide space-y-4",
							textClasses,
						)}
						dangerouslySetInnerHTML={{
							__html: description,
						}}
					/>
					{showReviews && <ReviewsCard />}
					{showFeatures && (
						<div className="grid grid-cols-2 lg:grid-cols-3">
							{features.map((feature) => {
								return (
									<div key={feature.id} className="p-3 flex flex-col">
										<feature.icon className="size-9 mb-4" />
										<h3
											className={clsx(
												"text-base lg:text-lg text-primary-dark",
											)}
										>
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
					)}
				</div>
			</div>
		</section>
	);
}
