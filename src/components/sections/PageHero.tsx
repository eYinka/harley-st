import Header from "@/components/layout/Header";
import Image from "next/image";
import BottomCurveAlt from "../core/BottomCurveAlt";
import LocationStrip from "../core/LocationStrip";
import PriceCard from "../core/PriceCard";
import RatingsCard from "../core/RatingsCard";
import clsx from "clsx";
import type { Theme } from "@/types/colors";

interface PageHeroProps {
	theme: Theme;
	bgImage: string;
	heroImage?: string;
	heroImageAlt?: string;
	heading?: string;
	subheading?: string;
	description?: string;
	price?: {
		heading: string;
		amount: string;
		iconUrl: string;
	};
	showLocation?: boolean;
}

export default function PageHero(props: PageHeroProps) {
	const {
		theme,
		bgImage,
		heroImage,
		heroImageAlt,
		heading,
		subheading,
		description,
		price,
		showLocation,
	} = props;

	let gradientClasses;
	let subheadingClasses;
	let textClasses;

	switch (theme) {
		case "pink":
			gradientClasses = "gradient_bg_pink";
			subheadingClasses = "text-red-200";
			textClasses = "text-pink-200";
			break;

		case "green":
			gradientClasses = "gradient_bg_green";
			subheadingClasses = "text-primary-600";
			textClasses = "text-primary-600";
			break;

		case "orange":
			gradientClasses = "gradient_bg_orange";
			subheadingClasses = "text-brown-200";
			textClasses = "text-brown-200";
			break;

		default:
			gradientClasses = "gradient_bg";
			subheadingClasses = "text-primary-dark ";
			textClasses = "text-gray-500";
			break;
	}

	return (
		<div className="w-full relative">
			<Header />
			<div className="container mx-auto relative z-10">
				<div className="flex flex-col lg:flex-row gap-8">
					<div
						className={clsx(
							"lg:max-w-[570px] flex flex-col items-center justify-center lg:items-start text-center lg:text-left pt-24 pb-20 md:pb-40",
							!heroImage && "lg:mx-auto text-center",
						)}
					>
						<h1
							className={clsx(
								"text-primary-dark font-semibold leading-12",
								!heroImage && "text-center mx-auto",
							)}
						>
							<span
								className={clsx(
									"text-4xl lg:text-5xl text-transparent bg-clip-text",
									gradientClasses,
								)}
							>
								{heading}
								<br />
							</span>{" "}
							{subheading && (
								<span
									className={clsx(
										"text-3xl lg:text-5xl",
										subheadingClasses,
									)}
								>
									{subheading}
								</span>
							)}
						</h1>
						<div
							className={clsx(
								"text-lg lg:text-xl leading-8 lg:leading-8 mt-4 space-y-4",
								!heroImage && "text-center mx-auto",
								textClasses,
							)}
							dangerouslySetInnerHTML={{ __html: description! }}
						/>
						{showLocation && <LocationStrip />}
						{price && (
							<div className="flex mt-2.5 flex-col justify-center lg:justify-start w-full gap-5 lg:gap-2.5 lg:flex-row">
								<PriceCard
									text={`${price.heading} ${price.amount}`}
									iconUrl={price.iconUrl}
								/>
								<RatingsCard />
							</div>
						)}
					</div>
					{heroImage && (
						<div className="relative size-96 lg:size-[460px] self-center lg:flex-1 lg:self-end">
							<Image
								src={heroImage}
								alt={heroImageAlt!}
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
								className="object-contain object-center pointer-events-none"
							/>
						</div>
					)}
				</div>
			</div>

			<Image
				src={bgImage}
				alt="hero background"
				fill
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
				className="object-cover z-0 pointer-events-none"
			/>

			<BottomCurveAlt classNames="-bottom-1 w-full z-10" />
		</div>
	);
}
