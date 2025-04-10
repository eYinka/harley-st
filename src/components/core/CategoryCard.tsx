import clsx from "clsx";
import type React from "react";

interface CategoryCardProps {
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
	title: string;
	iconClassNames?: string;
}

export default function CategoryCard(props: CategoryCardProps) {
	const { icon: Icon, title, iconClassNames } = props;
	return (
		<div className="rounded-2xl text-center flex justify-center items-center flex-col gap-2 lg:gap-5 p-2 aspect-square cursor-pointer border border-transparent hover:border-primary-alt/40 hover:bg-primary-alt/10 transition duration-300">
			<Icon className={clsx("size-12 lg:size-18 shrink-0", iconClassNames)} />

			<p className="text-base text-center lg:text-xl text-primary-dark">{title}</p>
		</div>
	);
}
