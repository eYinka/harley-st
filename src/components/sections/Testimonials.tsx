"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import GradientTitle from "@/components/core/GradientTitle";
import ReviewsCard from "../core/ReviewsCard";
import { testimonials } from "@/lib/data-source";
import TestimonialCard from "../core/TestimonialCard";
import { Swiper as SwiperType } from "swiper";
import { useRef } from "react";
import { ChevronLeftCircleIcon, ChevronRightCircleIcon } from "lucide-react";
import type { Theme } from "@/types/colors";
import clsx from "clsx";

interface TestimonialProps {
	theme?: Theme;
	showExternalReviews?: boolean;
}

export default function Testimonials(props: TestimonialProps) {
	const { showExternalReviews, theme } = props;

	const swiperRef = useRef<SwiperType | null>(null);

	let textClasses;

	switch (theme) {
		case "pink":
			textClasses = "text-red-200";
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

	return (
		<section>
			<div className="container mx-auto flex flex-col items-center justify-center">
				<GradientTitle
					subtitle="Testimonials"
					subtitleClassNames="text-center text-3xl mb-2"
					gradientType={theme}
				/>
				<h4 className={clsx("text-2xl lg:text-3xl font-medium text-center", textClasses)}>
					What Our Patients Say About Their Experience
				</h4>
				<div className="w-full">
					<p
						className={clsx(
							"text-xl text-center mt-4 tracking-wide mb-4 text-opacity-50",
							textClasses,
						)}
					>
						We are committed to providing a high standard of care to our patients. Take
						a look at some of the incredible responses we have received.
					</p>
				</div>
			</div>
			<div className="flex justify-between px-16">
				<button className="cursor-pointer" onClick={() => swiperRef.current?.slidePrev()}>
					{" "}
					<ChevronLeftCircleIcon className="size-14 text-primary-dark stroke-1" />
				</button>
				<button className="cursor-pointer" onClick={() => swiperRef.current?.slideNext()}>
					{" "}
					<ChevronRightCircleIcon className="size-14 text-primary-dark stroke-1" />{" "}
				</button>
			</div>
			<div className="flex justify-center bg-white">
				<Swiper
					onSwiper={(swiper) => (swiperRef.current = swiper)}
					modules={[Autoplay]}
					slidesPerView={"auto"}
					speed={1000}
					pagination={{
						clickable: true,
					}}
					loop={true}
					breakpoints={{
						0: {
							slidesPerView: 1,
							centeredSlides: true,
						},
						640: {
							slidesPerView: "auto",
						},
					}}
				>
					{testimonials.map((item) => (
						<SwiperSlide key={item.id} className="w-full md:max-w-[350px] py-12 px-6">
							<TestimonialCard
								review={item.review}
								stars={item.stars}
								date={item.date}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			{showExternalReviews && (
				<div className="flex justify-center">
					<ReviewsCard />
				</div>
			)}
		</section>
	);
}
