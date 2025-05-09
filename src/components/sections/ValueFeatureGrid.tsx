import Image from "next/image";

interface ValueFeatureGridProps {
	items: {
		title: string;
		image: string;
	}[];
}

export default function ValueFeatureGrid(props: ValueFeatureGridProps) {
	const { items } = props;

	return (
		<section className="container mx-auto">
			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
				{items.map((item, index) => (
					<div
						key={index}
						className="flex flex-col items-center text-center p-6 rounded-xl card-shadow"
					>
						<Image
							src={item.image}
							alt={item.title}
							width={64}
							height={64}
							className="mb-4"
						/>
						<h3 className="text-xl text-primary-dark">{item.title}</h3>
					</div>
				))}
			</div>
		</section>
	);
}
