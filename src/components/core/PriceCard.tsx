import Image from "next/image";

interface PriceCardProps {
	iconUrl: string;
	text: string;
}

export default function PriceCard(props: PriceCardProps) {
	const { iconUrl, text } = props;
	return (
		<div className="mx-auto md:mx-0 py-2.5 px-3 flex  items-center gap-2.5 rounded-lg bg-white w-fit card-shadow">
			<div className="size-12 relative ">
				<Image
					src={iconUrl}
					alt="icon-price-starting-female"
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
					className="object-contain object-center pointer-events-none"
				/>
			</div>
			<p className="mx-auto text-primary-600 leading-6 text-xl max-w-[110px] text-left">
				{text}
			</p>
		</div>
	);
}
