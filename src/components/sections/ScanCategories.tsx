import GradientTitle from "@/components/core/GradientTitle";
import CatFemaleIcon from "@/components/icons/CatFemaleIcon";
import CatPregnancyIcon from "../icons/CatPregnancyIcon";
import CatBreastIcon from "../icons/CatBreastIcon";
import CatMaleIcon from "../icons/CatMaleIcon";
import CatChildrenIcon from "../icons/CatChildrenIcon";
import CatMuscleIcon from "../icons/CatMuscleIcon";
import CategoryCard from "../core/CategoryCard";

export default function ScanCategories() {
	const categories = [
		{
			id: 1,
			title: "Female",
			link: "#",
			icon: CatFemaleIcon,
		},
		{
			id: 2,
			title: "Pregnancy",
			link: "#",
			icon: CatPregnancyIcon,
		},
		{
			id: 3,
			title: "Breast",
			link: "#",
			icon: CatBreastIcon,
		},
		{
			id: 4,
			title: "Male",
			link: "#",
			icon: CatMaleIcon,
		},
		{
			id: 5,
			title: "Children",
			link: "#",
			icon: CatChildrenIcon,
		},
		{
			id: 6,
			title: "Muscle & Joints",
			link: "#",
			icon: CatMuscleIcon,
		},
	];

	return (
		<section className="container mx-auto mt-28 flex flex-col items-center justify-center">
			<GradientTitle
				title="Categories"
				subtitle="Private Scan"
				titleClassNames="text-center text-3xl lg:text-5xl leading-14"
				subtitleClassNames="text-center text-2xl lg:text-3xl"
			/>
			<div className="bg-white rounded-3xl grid grid-cols-3 lg:grid-cols-6 gap-8 shadow-md px-4 py-6">
				{categories.map((category) => (
					<CategoryCard key={category.id} {...category} />
				))}
			</div>
		</section>
	);
}
