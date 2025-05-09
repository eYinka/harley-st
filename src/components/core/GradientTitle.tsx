import type { Theme } from "@/types/colors";
import clsx from "clsx";

interface GradientTitleProps {
	title?: string;
	subtitle?: string;
	titleClassNames?: string;
	subtitleClassNames?: string;
	gradientType?: Theme;
}
export default function GradientTitle(props: GradientTitleProps) {
	const { title, subtitle, titleClassNames, subtitleClassNames, gradientType } = props;

	const gradientColor = () => {
		switch (gradientType) {
			case "pink":
				return "bg-gradient-to-r from-gradient-300 from-30% to-gradient-400 to-70%";
			case "green":
				return "gradient_bg_green";
			case "orange":
				return "gradient_bg_orange";
			default:
				return "gradient_bg";
		}
	};

	const subtitleColor = () => {
		switch (gradientType) {
			case "pink":
				return "text-red-200";
			case "green":
				return "text-primary-600";
			case "orange":
				return "text-brown-200";
			default:
				return "text-primary-dark" ;
		}
	};

	return (
		<h2>
			{subtitle && (
				<span className={clsx("font-medium block", subtitleClassNames, subtitleColor())}>
					{subtitle}
				</span>
			)}

			{title && (
				<span
					className={clsx(
						"text-transparent bg-clip-text font-medium leading-14",
						titleClassNames,
						gradientColor(),
					)}
				>
					{title}
				</span>
			)}
		</h2>
	);
}
