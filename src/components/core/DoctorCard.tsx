import Image from "next/image";
import Link from "next/link";

interface DoctorCardProps {
	name: string;
	image: string;
	title: string;
	bio: string;
	link: string;
}

export default function DoctorCard(props: DoctorCardProps) {
	const { name, image, title, bio, link } = props as DoctorCardProps;
	return (
		<div className="bg-white p-4 rounded-lg specialist-shadow w-full">
			<Link href={link}>
				<div className="bg-[#ECF6F8] rounded-xl">
					<Image
						loading={"lazy"}
						src={image}
						alt={name}
						width={400}
						height={200}
						className="w-full h-auto mb-4"
					/>
				</div>
				<h3 className="text-xl font-medium text-primary-dark mb-4">{name}</h3>
				<p className="text-md text-gray-500 mb-4">{title}</p>
				<p className="text-sm text-primary-dark mt-2 line-clamp-3 mb-4">{bio}</p>
				<p className="text-base text-gray-900">Learn More</p>
			</Link>
		</div>
	);
}
