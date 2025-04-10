import Image from "next/image";

export default function ReviewsCard() {
	const reviewCards = [
		{
			id: 1,
			title: "Google Reviews",
			link: "#",
			image: "/images/google-reviews.png",
		},
		{
			id: 2,
			title: "Trustpilot Reviews",
			link: "#",
			image: "/images/trustpilot-reviews.png",
		},
	];

	return (
		<div className="grid grid-cols-2 gap-10 mt-8 mb-8">
			{reviewCards.map((card) => (
				<div
					key={card.id}
					className="rounded-lg p-2 flex flex-col justify-center items-center review-shadow"
				>
					<Image
						loading={"lazy"}
						src={card.image}
						alt={card.title}
						width={200}
						height={100}
						className="w-full h-auto"
					/>
				</div>
			))}
		</div>
	);
}
