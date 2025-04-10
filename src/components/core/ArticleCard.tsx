import Image from "next/image";
import Link from "next/link";

interface FaqCardProps {
	title: string;
	description: string;
	image: string;
	author: string;
	date: string;
	link: string;
}
export default function ArticleCard(props: FaqCardProps) {
	const { title, description, image, author, date, link } = props;
	return (
		<article className="rounded-2xl bg-white p-6 w-full card-shadow">
			<Link href={link} className="block">
				<Image
					src={image}
					alt={title}
					width={300}
					height={160}
					loading="lazy"
					className="w-full h-full object-cover max-h-[160px] rounded-2xl mb-2 border border-white shadow-xl -mt-16"
				/>

				<h3 className="text-lg lg:text-xl font-medium text-primary-dark mb-6">{title}</h3>
				<p className="text-sm text-primary-dark mb-2">
					{author} &middot; {date}
				</p>
				<p className="text-base text-gray-500 mb-2 line-clamp-4">{description}</p>
			</Link>
		</article>
	);
}
