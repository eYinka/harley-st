"use client";

import { useState } from "react";
import CategoryButton from "../core/CategoryButton";
import {
	breastClinicPriceList,
	childrenPriceList,
	femalePriceList,
	malePriceList,
	muscleJointPriceList,
	pregnancyPriceList,
} from "@/lib/data-source";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import CatChildrenIcon from "../icons/CatChildrenIcon";
import CatFemaleIcon from "../icons/CatFemaleIcon";
import CatBreastIcon from "../icons/CatBreastIcon";
import CatPregnancyIcon from "../icons/CatPregnancyIcon";
import CatMaleIcon from "../icons/CatMaleIcon";
import CatMuscleIcon from "../icons/CatMuscleIcon";
import Link from "next/link";

export default function PriceLists() {
	const [currentTab, setCurrentTab] = useState("children");

	const categories = [
		{
			slug: "children",
			label: "Children",
			items: childrenPriceList,
			icon: CatChildrenIcon,
		},
		{
			slug: "female",
			label: "Female",
			items: femalePriceList,
			icon: CatFemaleIcon,
		},
		{
			slug: "breast_clinic",
			label: "Breast Clinic",
			items: breastClinicPriceList,
			icon: CatBreastIcon,
		},
		{
			slug: "pregnancy",
			label: "Pregnancy",
			items: pregnancyPriceList,
			icon: CatPregnancyIcon,
		},
		{
			slug: "male",
			label: "Male",
			items: malePriceList,
			icon: CatMaleIcon,
		},
		{
			slug: "muscle_joints",
			label: "Muscle & Joints",
			items: muscleJointPriceList,
			icon: CatMuscleIcon,
		},
	];

	const data = categories?.find((item) => item.slug === currentTab);

	return (
		<section className="container mx-auto">
			<div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
				<div className="md:hidden block">
					<Image
						src={"/images/swipe-animation.gif"}
						width={150}
						height={90}
						alt=""
						className="mb-4"
					/>
					{categories?.length > 0 && (
						<p className="md:hidden text-xl text-gray-500 text-center mb-6">
							Swipe to View Categories
						</p>
					)}

					<Swiper slidesPerView={"auto"} centeredSlides={true}>
						{categories.map((category) => (
							<SwiperSlide
								key={category.slug}
								className="w-full max-w-[350px] py-12 px-6"
							>
								<CategoryButton
									title={category.label}
									icon={category.icon}
									isActive={currentTab === category.slug}
									handleClick={() => setCurrentTab(category.slug)}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				{categories.map((category) => (
					<div key={category.slug} className="basis-1/4 hidden lg:block">
						<CategoryButton
							title={category.label}
							icon={category.icon}
							isActive={currentTab === category.slug}
							handleClick={() => setCurrentTab(category.slug)}
						/>
					</div>
				))}
			</div>

			<div className="w-full flex flex-col gap-7 lg:px-10">
				{data?.items?.map((item, idx) => (
					<Link key={idx} href={item.slug} className="group">
						<div className="flex justify-between gap-2.5">
							<div className="flex justify-between gap-2.5 w-[calc(100%-80px)]">
								<p className="min-w-fit text-blue-700 text-lg lg:text-xl lg:leading-10 lg:font-medium group-hover:text-secondary">
									{item.service}
								</p>
								<span className="h-px w-full bg-blue-700 mt-5"></span>
							</div>
							<p className="w-20 text-right text-blue-700 text-lg lg:text-xl">
								{item.price}
							</p>
						</div>
						{item.subtitle && (
							<p className="text-blue-700 text-lg lg:text-xl lg:font-medium">
								{item.subtitle}
							</p>
						)}
					</Link>
				))}
			</div>
		</section>
	);
}
