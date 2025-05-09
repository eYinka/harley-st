"use client";
import GradientTitle from "@/components/core/GradientTitle";
import Image from "next/image";
import TopCurve from "./TopCurve";
import BottomCurve from "./BottomCurve";
import GradientButton from "./GradientButton";
import type { Theme } from "@/types/colors";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface BannerAltProps {
	theme?: Theme;
	title?: string;
	content?: string | TrustedHTML;
	bgImage: string;
	image?: string;
}

export default function BannerAlt(props: BannerAltProps) {
	const { theme, title, content, bgImage, image } = props;

	return (
		<section className="relative">
			<TopCurve />
			<div className="relative py-16 flex flex-col xl:flex-row ">
				<Image
					src={bgImage}
					alt="Ultrasound scan images on phone and tablet harley street ultrasound"
					loading="lazy"
					fill
					className="object-cover object-right w-auto h-full"
				/>
				<div className="container mx-auto xl:px-14 xl:mx-0 py-10 relative">
					<div className="flex flex-col w-10/12">
						<GradientTitle
							subtitle={title}
							subtitleClassNames="text-3xl lg:text-5xl lg:leading-16"
							gradientType={theme}
						/>
						{content && (
							<div
								className="text-xl text-gray-500 tracking-wide leading-loose space-y-4 mt-10"
								dangerouslySetInnerHTML={{ __html: content }}
							/>
						)}
						<div className="mt-6">
							<GradientButton text="Guidelines" classNames="text-xl" theme={theme} />
						</div>
					</div>
				</div>
				<div className="flex lg:basis-1/2 justify-center z-10">
					<div className="w-full relative">
						{image && (
							<Image
								src={image}
								alt={title!}
								width={600}
								height={600}
								className="w-full h-full object-contain block"
							/>
						)}
					</div>
				</div>
			</div>
			<BottomCurve />
		</section>
	);
}
