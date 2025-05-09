"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import GradientTitle from "@/components/core/GradientTitle";
import Image from "next/image";
import TopCurve from "./TopCurve";
import BottomCurve from "./BottomCurve";
import GradientButton from "./GradientButton";
import type { Theme } from "@/types/colors";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';

interface BannerWithSliderProps {
	theme?: Theme;
	bgImage: string;
}

export default function BannerWithSlider(props: BannerWithSliderProps) {
	const { theme, bgImage } = props;

	const images = [
		{
			id: 1,
			src: "/images/harley-street-experience-clinic-exterior-harley-street-ultrasound.webp",
			alt: "Ultrasound scan images on phone and tablet harley street ultrasound",
		},
		{
			id: 2,
			src: "/images/harley-street-experience-waiting-room-harley-street-ultrasound.webp",
			alt: "Ultrasound scan images on phone and tablet harley street ultrasound",
		},
	];
	return (
		<section className="relative">
			<TopCurve />
			<div className="relative py-16 flex flex-col xl:flex-row ">
				<Image
					src={bgImage}
					alt="Ultrasound scan images on phone and tablet harley street ultrasound"
					loading="lazy"
					fill
					className="object-cover object-left w-auto h-full"
				/>
				<div className="container mx-auto xl:px-14 xl:mx-0 py-10 relative">
					<div className="flex flex-col w-10/12">
						<GradientTitle
							subtitle="The Harley Street Experience"
							subtitleClassNames="text-3xl lg:text-4xl lg:leading-16"
							gradientType={theme}
						/>
						<p className="text-xl text-gray-500 tracking-wide leading-loose mt-10">
							We aim to provide the very best experience possible to all of our
							patients and visitors, and this covers every aspect of our services —
							from our specialists to our technology and of course to our clinic
							itself.
						</p>
						<p className="text-xl text-gray-500 tracking-wide leading-loose mt-10">
							When you visit us, you will find our clinic to be a clean, comfortable
							and reassuring environment. We also maintain a high standard of best
							practices, ensuring maximum safety at all times.
						</p>
						<div className="mt-6">
							<GradientButton text="Guidelines" classNames="text-xl" theme={theme} />
						</div>
					</div>
				</div>
				<div className="flex lg:basis-1/2 justify-center xl:-translate-y-28 z-10">
					<Swiper
						modules={[Autoplay, Pagination, EffectFade]}
						slidesPerView={1}
						speed={1000}
						spaceBetween={50}
						centeredSlides={true}
						effect="fade"
						autoplay={{
							delay: 3000,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}
						className="w-full max-w-[700px] xl:h-[700px]"
					>
						{images.map((image) => (
							<SwiperSlide key={image.id} className="w-full relative">
								<Image
									src={image.src}
									alt={image.alt}
									width={600}
									height={600}
									className="w-full h-full object-contain block"
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
			<BottomCurve />
		</section>
	);
}
