import clsx from "clsx";
import type React from "react";
import CatBreastIcon from "../icons/CatBreastIcon";
import CatFemaleIcon from "../icons/CatFemaleIcon";
import CatPregnancyIcon from "../icons/CatPregnancyIcon";
import CatMaleIcon from "../icons/CatMaleIcon";
import CatMuscleIcon from "../icons/CatMuscleIcon";

interface ServiceTabProps {
	title: string;
	icon: string | React.FC<React.SVGProps<SVGSVGElement>>;
	isActive: boolean;
	handleClick: () => void;
}

export default function CategoryButton(props: ServiceTabProps) {
	const { title, icon: Icon, isActive, handleClick } = props;
	const activeClass = isActive
		? "border border-gray-100 inset-shadow-sm shadow-sm"
		: "border border-gray-100 shadow-xl";

	let IconComponent = Icon;

	const iconMap = {
		CatBreastIcon: CatBreastIcon,
		CatFemaleIcon: CatFemaleIcon,
		CatPregnancyIcon: CatPregnancyIcon,
		CatMaleIcon: CatMaleIcon,
		CatMuscleIcon: CatMuscleIcon,
	};

	if (typeof Icon === "string") {
		IconComponent = iconMap[Icon as keyof typeof iconMap] || CatBreastIcon;
	}

	return (
		<button
			className={clsx(
				"w-full flex flex-col gap-4 py-5 justify-center items-center rounded-xl cursor-pointer hover:border hover:border-gray-100 hover:inset-shadow-sm hover:shadow-sm",
				activeClass,
			)}
			onClick={handleClick}
		>
			<IconComponent className="size-12 lg:size-18 shrink-0" />
			<h3 className="text-2xl text-black">{title}</h3>
		</button>
	);
}
