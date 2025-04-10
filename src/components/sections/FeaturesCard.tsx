import GradientTitle from "@/components/core/GradientTitle";
import Image from "next/image";
import MedicalCrossIcon from "@/components/icons/MedicalCrossIcon";
import CalendarIcon from "@/components/icons/CalendarIcon";
import ThumbsUpIcon from "../icons/ThumbsUpIcon";
import HeartHandsIcon from "../icons/HeartHandsIcon";
import HeartIcon from "../icons/HeartIcon";
import GradientButton from "../core/GradientButton";
import ReviewsCard from "../core/ReviewsCard";

export default function FeaturesCard() {
	const features = [
		{
			id: 1,
			title: "Specalist Doctors",
			icon: MedicalCrossIcon,
		},
		{
			id: 2,
			title: "Easy Online Booking",
			icon: CalendarIcon,
		},
		{
			id: 3,
			title: "Reassurance",
			icon: ThumbsUpIcon,
		},
		{
			id: 4,
			title: "Quality Care",
			icon: HeartHandsIcon,
		},
		{
			id: 5,
			title: "Peace of Mind",
			icon: HeartIcon,
		},
	];

	return (
		<section className="container mx-auto xl:px-24">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
				<div>
					<GradientTitle
						title="Exceptional Care"
						titleClassNames="text-4xl lg:text-6xl"
						subtitle="Nothing But"
						subtitleClassNames="text-2xl lg:text-4xl lg:leading-16"
					/>
					<p className="text-xl text-gray-500 mt-4 tracking-wide">
						Reassurance and peace of mind are at the heart of everything we do. During
						your entire experience with us, you will benefit from the very best level of
						expertise & patient care.{" "}
					</p>
					<ReviewsCard />
					<div className="grid grid-cols-2 lg:grid-cols-3">
						{features.map((feature) => {
							return (
								<div key={feature.id} className="p-3 flex flex-col">
									<feature.icon className="size-9 mb-4" />
									<h3 className="text-base lg:text-lg text-primary-dark">
										{feature.title}
									</h3>
								</div>
							);
						})}
						<div className="flex items-center">
							<GradientButton text="Learn More" classNames="font-normal" />
						</div>
					</div>
				</div>
				<Image
					src="/images/private-ultrasound-clinic-london-harley-street-ultrasound.png"
					alt="Hero Image"
					width={500}
					height={500}
					className="w-full h-auto"
				/>
			</div>
		</section>
	);
}
