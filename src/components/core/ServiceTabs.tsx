"use client";

import { useState } from "react";
import ServiceTab from "./ServiceTab";
import type { Service } from "@/lib/data-source";
import ServiceCard from "./ServiceCard";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import clsx from "clsx";
import type { Theme } from "@/types/colors";

interface ServiceTabsProps {
	services: Service[];
	theme?: Theme;
}

export default function ServiceTabs(props: ServiceTabsProps) {
	const { theme, services } = props;
	const [currentTab, setCurrentTab] = useState(services[0]?.slug || "general");
	const data = services?.find((item: Service) => item.slug === currentTab);

	return (
		<section className="container mx-auto">
			<div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
				<div className="sm:hidden block">
					<Image
						src={"/images/swipe-animation.gif"}
						width={150}
						height={90}
						alt=""
						className="mb-4"
					/>
					{services?.length > 0 && (
						<p className="sm:hidden text-xl text-gray-500 text-center mb-6">
							Swipe to View Categories
						</p>
					)}
					<Swiper slidesPerView={"auto"} centeredSlides={true}>
						{services.map((service: Service) => (
							<SwiperSlide
								key={service.slug}
								className="w-full max-w-[350px] py-12 px-6"
							>
								<ServiceTab
									title={service.label}
									icon={service.icon}
									isActive={currentTab === service.slug}
									handleClick={() => setCurrentTab(service.slug)}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				{services.map((service: Service) => (
					<div key={service.slug} className="basis-1/4 hidden lg:block">
						<ServiceTab
							title={service.label}
							icon={service.icon}
							isActive={currentTab === service.slug}
							handleClick={() => setCurrentTab(service.slug)}
						/>
					</div>
				))}
			</div>

			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:mx-3">
				{data?.items?.map((item) => (
					<div
						key={item.id}
						className={clsx(
							"w-full h-full",
							data.card_type === "full" && "md:col-span-2 lg:first:col-span-4",
						)}
					>
						<ServiceCard card_type={data.card_type} service={item} theme={theme} />
					</div>
				))}
			</div>
		</section>
	);
}
