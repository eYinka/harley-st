"use client";

import { useState } from "react";
import { StarIcon } from "lucide-react";

interface TestimonialCardProps {
	review: string;
	stars: number;
	date: string;
}

export default function TestimonialCard(props: TestimonialCardProps) {
	const { review, stars, date } = props;
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleReadMore = () => {
		setIsExpanded((prev) => !prev);
	};

	const starElements = Array.from({ length: stars }, (_, index) => (
		<StarIcon className="fill-yellow-500 text-yellow-500 text-lg" key={index} size={20} />
	));

	return (
		<div className="bg-white min-h-[330px] p-6 rounded-lg review-shadow w-full flex flex-col justify-between transition-all">
			<p className={`text-[#859ba3] mt-2 leading-[30px] ${isExpanded ? "" : "line-clamp-6"}`}>
				{review}
			</p>
			{review.length > 220 && ( 
				<button
					className="text-base text-primary-dark ml-auto mt-2 cursor-pointer"
					onClick={toggleReadMore}
				>
					{isExpanded ? "Read Less" : "Read More"}
				</button>
			)}
			<div className="flex items-center justify-between mt-4">
				<div className="flex items-center space-x-2">{starElements}</div>
				<time dateTime={date} className="text-sm text-primary-dark">
					{date}
				</time>
			</div>
		</div>
	);
}
