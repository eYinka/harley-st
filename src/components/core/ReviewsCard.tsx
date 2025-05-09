import Image from "next/image";

export default function ReviewsCard() {
	const reviewCards = [
		{
			id: 1,
			title: "Google Reviews",
			link: "#",
			image: "https://images.ctfassets.net/1w1x9dft88u5/UiQwkjgiA3X0YLqBYYre1/f23c888a70d5959d314a779c7c6304d0/google_badge.png",
		},
		{
			id: 2,
			title: "Trustpilot Reviews",
			link: "#",
			image: "/images/trustpilot-reviews.png",
		},
	];

	return (
		<div className="grid md:grid-cols-2 items-center justify-center gap-10 mt-8 mb-8">
			{reviewCards.map((card) => (
				<div
					key={card.id}
					className="rounded-lg p-2 flex flex-col justify-center items-center review-shadow w-[220px] h-20 relative"
				>
					<Image
						loading={"lazy"}
						src={card.image}
						alt={card.title}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
						className="w-full h-auto object-contain"
					/>
				</div>
			))}
		</div>
	);
}
