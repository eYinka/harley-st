/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Doctor } from "@/lib/data-source";
import DoctorCardAlt from "../core/DoctorCardAlt";
import GradientTitle from "../core/GradientTitle";

type DoctorProp = Pick<
	Doctor,
	"name" | "imageUrl" | "accreditations" | "slug" | "heading" | "description" | "specialties"
>;

interface DoctorsGridProps {
	doctors: DoctorProp[];
}

export default function DoctorsGrid(props: DoctorsGridProps) {
	const { doctors } = props;

	const specialties = [
		{
			title: "Radiologists",
			slug: "radiologist",
			description:
				"Our expert Consultant Radiologists are UK trained, Fellows of the Royal College of Radiologists and General Medical Council registered. ",
		},
		{
			title: "Breast Surgeons",
			slug: "breast-surgeon",
			description: null,
		},
		{
			title: "Senior Sonographers",
			slug: "sonographer",
			description: null,
		},
	];

  const gender = ["male", "female"];

	const languages = [
		"English",
		"Arabic",
		"Dutch",
		"Greek",
		"Gujarati",
		"Italian",
		"Spanish",
		"Urdu",
		"Hindi",
	];


	return (
		<section className="container mx-auto">
			{specialties.map((specialty) => {
				const filteredDoctors = doctors.filter((doctor) =>
					doctor.specialties.some(
						(specialtyItem) => specialtyItem.slug === specialty.slug,
					),
				);
				return (
					<SpecialistSection
						key={specialty.slug}
						title={specialty.title}
						description={specialty.description}
						doctors={filteredDoctors}
					/>
				);
			})}
		</section>
	);
}

const SpecialistSection = ({
	title,
	description,
	doctors,
}: {
	title: string;
	description: string | null;
	doctors: DoctorProp[];
}) => {
	return (
		<section>
			<GradientTitle
				subtitle={title}
				titleClassNames="text-center text-3xl lg:text-5xl leading-14"
				subtitleClassNames="text-center text-2xl lg:text-3xl"
			/>
			{description && (
				<div className="max-w-[770px] mx-auto">
					<p className="text-center text-xl text-primary-dark mt-6 tracking-wide space-y-4">
						{description}
					</p>
				</div>
			)}
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-14">
				{doctors.map((doctor) => (
					<DoctorCardAlt
						key={doctor.slug}
						name={doctor.name}
						image={doctor.imageUrl}
						link={`/our-clinic/our-doctors/${doctor.slug}`}
						heading={doctor.heading}
						accreditations={doctor.accreditations}
					/>
				))}
			</div>
		</section>
	);
};
