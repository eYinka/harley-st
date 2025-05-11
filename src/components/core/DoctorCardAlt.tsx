import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface DoctorCardProps {
	name: string;
	image: string;
	heading: string;
	link: string;
	accreditations: string[];
}

export default function DoctorCardAlt(props: DoctorCardProps) {
	const { name, image, heading, link, accreditations } = props as DoctorCardProps;
	return (
		<div
			className="w-full mb-2.5 md:mb-7 bg-white rounded-xl card-shadow"
			data-testid="specialist-card-wrapper"
		>
			<article className="relative px-4">
				<div className="relative flex flex-col w-full  lg:flex-row gap-3 mb-4">
					<div className="relative lg:w-[60%] lg:min-w-[60%] xl:min-w-[60%] group bg-[#ECF6F8] rounded-xl overflow-hidden border-2 border-white md:-mt-6 cursor-pointer">
						<Link href={link}>
							<div className="w-full h-full group-hover:scale-[0.98] transition-all ease-linear">
								<Image
									loading={"lazy"}
									src={image}
									alt={name}
									width={200}
									height={160}
									className="w-full h-auto mb-4"
								/>
							</div>
							<div className="absolute left-0 -bottom-px bg-blue-500/90 bg-opacity-10 py-1.5  w-full flex justify-center items-center font-semibold text-sm md:text-base">
								<p className="text-primary-dark group-hover:text-[#44B9A5] transition-all ease-in-out">
									Learn more
								</p>
								<div className="w-fit">
									<ChevronRightIcon className="text-primary-dark w-5 group-hover:text-[#44B9A5] transition-all ease-in-out" />
								</div>
							</div>
						</Link>
					</div>
					<div className="flex flex-col justify-center gap-2">
						<h3 className="font-semibold text-lg md:text-xl text-primary-dark">
							{name}
						</h3>
						<p className="text-gray-500 text-sm md:text-base">
							{accreditations?.join(", ")}
						</p>
					</div>
				</div>
				<div className="line-clamp-3 mb-4 max-h-18 text-primary-dark">
					<p>{heading}</p>
				</div>
			</article>
		</div>
	);
}
