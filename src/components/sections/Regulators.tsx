import Image from "next/image";
import Link from "next/link";
import GradientButton from "../core/GradientButton";

interface RegulatorsProps {
	btnText?: string;
	btnLink?: string;
}

export default function Regulators(props: RegulatorsProps) {
	const { btnText, btnLink } = props;
	const regulators = [
		{
			id: 1,
			image: "/images/regulators/the-royal-collage-of-radiologists-logo-harley-street-ultrasound.png",
			title: "The Royal College of Radiologists",
			link: "#",
		},
		{
			id: 2,
			image: "/images/regulators/general-medical-council-logo-harley-street-ultrasound.png",
			title: "General Medical Council",
			link: "#",
		},
		{
			id: 3,
			image: "/images/regulators/royal-college-of-obstetricians-and-gynaecologists-logo-harley-street-ultrasound.png",
			title: "Royal College of Obstetricians and Gynaecologists",
			link: "#",
		},
		{
			id: 4,
			image: "/images/regulators/care-quality-commission-logo-harley-street-ultrasound.png",
			title: "Care Quality Commission",
			link: "#",
		},
		{
			id: 5,
			image: "/images/regulators/health-and-care-professions-council-logo-harley-street-ultrasound.png",
			title: "Health and Care Professions Council",
			link: "#",
		},
		{
			id: 6,
			image: "/images/regulators/royal-college-of-surgeons-of-england-logo-harley-street-ultrasound.png",
			title: "Royal College of Surgeons of England",
			link: "#",
		},
	];

	return (
		<section className="container mx-auto">
			<div className="grid lg:grid-cols-3 gap-8">
				<div className="">
					<h2 className="text-3xl lg:text-5xl text-primary-dark font-medium lg:leading-14">
						Registered & Regulated
					</h2>
					<p className="text-xl text-gray-500 mt-4 tracking-wide">
						Our team are fully registered and regulated for practice in the United
						Kingdom. Our patients should expect nothing less.
					</p>
				</div>
				<div className="lg:col-span-2">
					<div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
						{regulators.map(({ id, image, title, link }) => (
							<Link
								key={id}
								href={link}
								className="bg-white p-2 flex flex-col justify-center items-center hover:brightness-95 bright transition duration-300 ease-in-out"
							>
								<Image
									loading={"lazy"}
									src={image}
									alt={title}
									width={200}
									height={100}
									className="w-full h-auto"
								/>
							</Link>
						))}
					</div>
				</div>
			</div>
			{btnLink && btnText && (
				<div className="flex justify-center mt-6">
					<Link href={btnLink}>
						<GradientButton text={btnText} classNames="text-xl" />
					</Link>
				</div>
			)}
		</section>
	);
}
