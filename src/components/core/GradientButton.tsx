import type { Theme } from "@/types/colors";
import clsx from "clsx";

interface GradientButtonProps {
	text: string;
	classNames?: string;
	theme?: Theme;
}

export default function GradientButton(props: GradientButtonProps) {
	const { text, classNames, theme } = props;

	let gradientClasses;
	switch (theme) {
		case "pink":
			gradientClasses = "gradient_bg_pink";
			break;
		case "blue":
			gradientClasses = "gradient_bg";
			break;
		case "green":
			gradientClasses = "gradient_bg_green";
			break;
		case "orange":
			gradientClasses = "gradient_bg_orange";
			break;
		default:
			gradientClasses = "gradient_bg from-primary-alt from-50% to-secondary";
			break;
	}

	return (
		<button
			className={clsx(
				"bg-gradient-to-r  text-white font-semibold py-3 px-6 rounded-4xl hover:bg-fixed transition-all cursor-pointer",
				gradientClasses,
				classNames,
			)}
		>
			{text}
		</button>
	);
}
