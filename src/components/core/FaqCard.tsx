import Image from "next/image";
import { Button } from "@/components/shadcn/Button";
import Link from "next/link";

interface FaqCardProps {
	title: string;
	description: string;
	link: string;
	linkText: string;
	image: string;
}
export default function FaqCard(props: FaqCardProps) {
	const { title, description, link, linkText, image } = props;
	return (
		<div className="rounded-2xl bg-white p-2 card-shadow">
			<Image
				src={image}
				alt={title}
				width={500}
				height={500}
				loading="lazy"
				className="w-full h-full object-cover nmax-h-[225px] rounded-2xl mb-2 border border-white shadow-xl -mt-16"
			/>
			<div className="px-3 py-4">
				<h3 className="text-xl lg:text-2xl font-medium text-primary-dark mb-6">{title}</h3>
				<p className="text-lg lg:text-xl text-primary-dark mb-6">{description}</p>
				<div className="flex justify-center">
					<Link href={link}>
						<Button variant="white" size="lg" className="text-lg lg:text-xl font-medium rounded-full px-8 h-12">
							{linkText}
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
