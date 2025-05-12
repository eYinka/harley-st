import type { TransportRoute } from "@/lib/data-source";
import Image from "next/image";
import RichText from "./RichText";

interface TransportRoutesProps {
	items: TransportRoute[];
}

export default function TransportRoutes(props: TransportRoutesProps) {
	const { items } = props;

	return (
		<section>
			{items.map((item) => (
				<div key={item.id} className="flex flex-col gap-2 w-full">
					<div className="flex gap-6 items-start mb-6">
						<Image
							src={item.icon}
							alt={item.title}
							width={64}
							height={64}
							className="object-contain"
						/>
						<div>
							<h2 className="text-2xl lg:text-4xl font-medium text-primary-dark leading-12 mb-6">
								{item.title}
							</h2>
							<p className="text-primary-dark text-xl mb-6">{item.description}</p>
							{item.routes?.map((route) => (
								<div key={route.id} className="flex items-center gap-4 mb-6">
									<Image
										src={route.icon}
										alt={route.text}
										width={24}
										height={24}
										className="object-contain"
									/>
									<p className="text-primary-dark text-xl">{route.text}</p>
								</div>
							))}
							{item.sections?.map((section) => (
								<div key={section.id} className="flex flex-col gap-4 mb-6">
									<h2 className="text-primary-dark font-medium text-3xl mb-2">
										{section.title}
									</h2>
									<RichText
										content={section.description}
										classNames="text-primary-dark text-xl"
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			))}
		</section>
	);
}
